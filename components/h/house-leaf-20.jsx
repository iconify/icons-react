import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpx9c7b2s.css';
import '../../css/a/a_0kltb3w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpx9c7b2s"/><path class="a_0kltb3w"/>`,
		"fallback": "energy-icons:house-leaf-20",
	});
}

export default Component;
