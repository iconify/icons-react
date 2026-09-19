import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqpcc4bgf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bqpcc4bgf"/>`,
		"fallback": "heroicons:bell-16-solid",
	});
}

export default Component;
