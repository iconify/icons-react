import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0u7hix8w.css';
import '../../css/y/ylj916f_v.css';
import '../../css/t/ti3hk-btz.css';
import '../../css/u/ue6q9sbkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0u7hix8w"/><path class="ylj916f_v"/><path class="ti3hk-btz"/><path class="ue6q9sbkc"/>`,
		"fallback": "solar:cart-plus-bold-duotone",
	});
}

export default Component;
