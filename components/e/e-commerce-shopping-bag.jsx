import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z-arym0ss.css';
import '../../css/y/yfgi51pot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z-arym0ss"/><path class="yfgi51pot"/></g>`,
		"fallback": "streamline-ultimate:e-commerce-shopping-bag",
	});
}

export default Component;
