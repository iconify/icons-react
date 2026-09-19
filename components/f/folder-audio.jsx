import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/q58hkcbgc.css';
import '../../css/j/j6317qk2y.css';
import '../../css/k/kypu-j12r.css';
import '../../css/l/lx0eilk4u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="q58hkcbgc"/><g class="j6317qk2y"><path class="kypu-j12r"/><path class="lx0eilk4u"/></g></g>`,
		"fallback": "catppuccin:folder-audio",
	});
}

export default Component;
