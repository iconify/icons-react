import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9pq2-b_z.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9pq2-b_z"/>`,
		"fallback": "fa7-solid:house-chimney-window",
	});
}

export default Component;
