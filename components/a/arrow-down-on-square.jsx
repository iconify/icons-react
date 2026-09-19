import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-qe7cb8t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-qe7cb8t"/>`,
		"fallback": "heroicons-solid:arrow-down-on-square",
	});
}

export default Component;
