import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu_b0rb6m.css';

const viewBox = {"width":1920,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu_b0rb6m"/>`,
		"fallback": "fa:cloud",
	});
}

export default Component;
