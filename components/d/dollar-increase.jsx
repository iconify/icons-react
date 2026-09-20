import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s9cfkhb6c.css';
import '../../css/e/egnwpk-rl.css';
import '../../css/f/f4nq9m38v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="s9cfkhb6c"/><path class="egnwpk-rl"/><path class="f4nq9m38v"/></g>`,
		"fallback": "streamline-sharp:dollar-increase",
	});
}

export default Component;
