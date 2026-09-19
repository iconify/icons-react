import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acd640bgl.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acd640bgl"/>`,
		"fallback": "f7:arrowtriangle-up-square",
	});
}

export default Component;
