import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxk-14-gk.css';
import '../../css/r/r58q_lbbh.css';
import '../../css/f/fn2c-okpf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxk-14-gk"/><path class="r58q_lbbh"/><path class="fn2c-okpf"/>`,
		"fallback": "energy-icons:cogs-48",
	});
}

export default Component;
