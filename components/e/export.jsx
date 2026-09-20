import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr89lk6nk.css';
import '../../css/m/mli_10bmg.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr89lk6nk"/><path class="mli_10bmg"/>`,
		"fallback": "iwwa:export",
	});
}

export default Component;
