import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bnfju421g.css';
import '../../css/u/uuc96wb-t.css';
import '../../css/x/xsa_9xo4e.css';
import '../../css/r/rjj0-6jyn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bnfju421g"/><path class="uuc96wb-t"/><path class="xsa_9xo4e"/><path class="rjj0-6jyn"/></g>`,
		"fallback": "fluent-emoji-flat:fireworks",
	});
}

export default Component;
