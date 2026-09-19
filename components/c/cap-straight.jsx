import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v_mf6nbvh.css';
import '../../css/y/ybsqlk_rx.css';
import '../../css/v/vdc6itbws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="v_mf6nbvh"/><path class="ybsqlk_rx"/><path class="vdc6itbws"/></g>`,
		"fallback": "hugeicons:cap-straight",
	});
}

export default Component;
