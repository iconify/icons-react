import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxm_vbav.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbxm_vbav"/>`,
		"fallback": "dinkie-icons:broken-heart-filled",
	});
}

export default Component;
