import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtemedn_h.css';
import '../../css/y/y1jnin_gq.css';
import '../../css/r/rl-2a6bga.css';
import '../../css/s/srqm21bfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtemedn_h"/><path class="y1jnin_gq"/><path class="rl-2a6bga"/><path class="srqm21bfy"/>`,
		"fallback": "energy-icons:battery-cycle-48-bold",
	});
}

export default Component;
