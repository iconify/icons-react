import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vl1yu0n4m.css';
import '../../css/e/eph851bhm.css';
import '../../css/p/ptmeui_8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vl1yu0n4m"/><path class="eph851bhm"/><path class="ptmeui_8s"/></g>`,
		"fallback": "iconoir:exclude",
	});
}

export default Component;
