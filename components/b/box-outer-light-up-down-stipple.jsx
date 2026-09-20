import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jie5rdb8p.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jie5rdb8p"/>`,
		"fallback": "memory:box-outer-light-up-down-stipple",
	});
}

export default Component;
