import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/blv594jsg.css';
import '../../css/v/v_zpi5bkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="blv594jsg"/><path class="v_zpi5bkb"/></g>`,
		"fallback": "hugeicons:chat-user-01",
	});
}

export default Component;
