import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ijlwwvu6g.css';
import '../../css/e/esbvucbsh.css';
import '../../css/g/gg2ejpbby.css';
import '../../css/t/to9lo4bhx.css';
import '../../css/w/wqvxj0bnz.css';
import '../../css/m/msgc2qb0z.css';
import '../../css/j/jlia77but.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ijlwwvu6g"/><path class="esbvucbsh"/><path class="gg2ejpbby"/><path class="to9lo4bhx"/><path class="wqvxj0bnz"/><path class="msgc2qb0z"/><path class="jlia77but"/></g>`,
		"fallback": "iconaut:bee",
	});
}

export default Component;
