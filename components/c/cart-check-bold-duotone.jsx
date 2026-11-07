import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue6q9sbkc.css';
import '../../css/r/rl907-bqn.css';
import '../../css/y/ylj916f_v.css';
import '../../css/r/rj9tvvh9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue6q9sbkc"/><path class="rl907-bqn"/><path class="ylj916f_v"/><path class="rj9tvvh9i"/>`,
		"fallback": "solar:cart-check-bold-duotone",
	});
}

export default Component;
