import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d98mzkk1w.css';
import '../../css/t/t9o16wbon.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d98mzkk1w"/><path class="t9o16wbon"/>`,
		"fallback": "cil:deaf",
	});
}

export default Component;
