import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g2bhzsius.css';
import '../../css/t/td99pu0vk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g2bhzsius"/><path class="td99pu0vk"/></g>`,
		"fallback": "hugeicons:activity-spark",
	});
}

export default Component;
