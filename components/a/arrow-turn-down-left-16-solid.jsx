import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm0v-e0ee.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xm0v-e0ee"/>`,
		"fallback": "heroicons:arrow-turn-down-left-16-solid",
	});
}

export default Component;
