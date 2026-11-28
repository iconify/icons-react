import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhlzmqbtr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fyyo_q0fc.css';
import '../../css/q/q36fm162k.css';
import '../../css/t/tb3tliybk.css';
import '../../css/y/yhvfzz-kl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhlzmqbtr secondary"/><g class="dt0cm9dhy primary"><path class="fyyo_q0fc"/><path class="q36fm162k"/><path class="tb3tliybk"/><path class="yhvfzz-kl"/></g>`,
		"fallback": "iconaut:ai-brain-duo",
	});
}

export default Component;
