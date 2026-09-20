import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0huf36pq.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0huf36pq"/>`,
		"fallback": "memory:alpha-m-fill",
	});
}

export default Component;
