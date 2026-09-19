import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi1s0_b3l.css';
import '../../css/q/q25o2buzt.css';
import '../../css/d/df-2q4bmd.css';
import '../../css/h/hp_g0wb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi1s0_b3l"/><path class="q25o2buzt"/><path class="df-2q4bmd"/><path class="hp_g0wb3w"/>`,
		"fallback": "boxicons:categories",
	});
}

export default Component;
