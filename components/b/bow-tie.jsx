import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yjige0uwm.css';
import '../../css/n/n054g9rgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yjige0uwm"/><path class="n054g9rgk"/></g>`,
		"fallback": "hugeicons:bow-tie",
	});
}

export default Component;
