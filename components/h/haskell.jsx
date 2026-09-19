import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1i5j5zjy.css';
import '../../css/t/tsra2_hxh.css';
import '../../css/n/n6dcl9bls.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1i5j5zjy"/><path class="tsra2_hxh"/><path class="n6dcl9bls"/>`,
		"fallback": "devicon:haskell",
	});
}

export default Component;
