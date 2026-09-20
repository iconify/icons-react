import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae4o2u4po.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae4o2u4po"/>`,
		"fallback": "streamline:food-drinks-water-glass-glass-water-juice-drink-liquid",
	});
}

export default Component;
