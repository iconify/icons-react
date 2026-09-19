import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vn4gztbqd.css';
import '../../css/h/h4kc3ebpj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vn4gztbqd"/><path class="h4kc3ebpj"/></g>`,
		"fallback": "glyphs:bell-slash-bold",
	});
}

export default Component;
