import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hux14ll4r.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hux14ll4r"/>`,
		"fallback": "oi:expand-left",
	});
}

export default Component;
