import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jshczhbxz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/ql1ihubfm.css';
import '../../css/s/slwjvibek.css';
import '../../css/b/berxhxbrt.css';
import '../../css/c/cwzx67y1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jshczhbxz secondary"/><g class="dt0cm9dhy primary"><path class="ql1ihubfm"/><path class="slwjvibek"/><path class="berxhxbrt"/><path class="cwzx67y1i"/></g>`,
		"fallback": "iconaut:gas-pump-duo",
	});
}

export default Component;
