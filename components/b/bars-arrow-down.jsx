import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow7yq4bnm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ow7yq4bnm"/>`,
		"fallback": "heroicons-solid:bars-arrow-down",
	});
}

export default Component;
