import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/owti05bou.css';
import '../../css/n/ntfmnqbnc.css';
import '../../css/g/gfink2b2a.css';
import '../../css/b/bl0g-1q1u.css';
import '../../css/v/vb18ns7tk.css';
import '../../css/y/y7ndy2bec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="owti05bou wm-shadow"/><path class="ntfmnqbnc"/><path class="gfink2b2a"/><path class="bl0g-1q1u"/><path class="vb18ns7tk wm-shine"/><path class="wm-deco y7ndy2bec"/></g>`,
		"fallback": "withicons-sticker:crayon",
	});
}

export default Component;
