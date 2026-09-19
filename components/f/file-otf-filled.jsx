import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x94lhhd4d.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x94lhhd4d"/>`,
		"fallback": "dinkie-icons:file-otf-filled",
	});
}

export default Component;
