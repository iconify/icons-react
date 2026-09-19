import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s7qxfdbrb.css';
import '../../css/h/hwsal5q-o.css';
import '../../css/z/ze6eu2fom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="s7qxfdbrb"/><circle class="hwsal5q-o"/><path class="ze6eu2fom"/></g>`,
		"fallback": "iconoir:hand-brake",
	});
}

export default Component;
