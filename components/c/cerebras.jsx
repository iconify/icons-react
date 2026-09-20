import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzxkiu5ie.css';
import '../../css/x/xpa0b3bpk.css';
import '../../css/j/jt3_xabug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pzxkiu5ie"><path clip-rule="evenodd" class="xpa0b3bpk"/><path class="jt3_xabug"/></g>`,
		"fallback": "thesvg-color:cerebras",
	});
}

export default Component;
