import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmi-m1byp.css';
import '../../css/w/wabkv5x6c.css';
import '../../css/f/f6j6ebcpk.css';
import '../../css/a/a9480j_gl.css';
import '../../css/j/jpuqzh8by.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmi-m1byp"/><path class="wabkv5x6c"/><path class="f6j6ebcpk"/><path class="a9480j_gl"/><path class="jpuqzh8by"/>`,
		"fallback": "fxemoji:barberpole",
	});
}

export default Component;
