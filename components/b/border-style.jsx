import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwzc0c7sq.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwzc0c7sq"/>`,
		"fallback": "zmdi:border-style",
	});
}

export default Component;
