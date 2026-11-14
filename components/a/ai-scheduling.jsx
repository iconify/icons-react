import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yfe589b9i.css';
import '../../css/e/ejwve6bvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yfe589b9i"/><path class="ejwve6bvh"/></g>`,
		"fallback": "hugeicons:ai-scheduling",
	});
}

export default Component;
