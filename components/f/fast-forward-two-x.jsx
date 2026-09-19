import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz1ixwbvb.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz1ixwbvb"/>`,
		"fallback": "fluent-mdl2:fast-forward-two-x",
	});
}

export default Component;
