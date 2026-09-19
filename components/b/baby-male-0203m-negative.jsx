import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d85qszb-q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d85qszb-q"/>`,
		"fallback": "healthicons:baby-male-0203m-negative",
	});
}

export default Component;
