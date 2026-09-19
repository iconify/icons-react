import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/plr4880_d.css';
import '../../css/y/ybtd3p2bo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="plr4880_d"/><path class="ybtd3p2bo"/></g>`,
		"fallback": "hugeicons:hotel-02",
	});
}

export default Component;
