import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tun7kpbmr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ay6b69buz.css';
import '../../css/o/o_nxt9b0b.css';
import '../../css/p/pmf88gbsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary tun7kpbmr"/><g class="dt0cm9dhy primary"><path class="ay6b69buz"/><path class="o_nxt9b0b"/><path class="pmf88gbsg"/></g>`,
		"fallback": "iconaut:folder-output-duo",
	});
}

export default Component;
