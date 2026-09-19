import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4_1llqee.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s4_1llqee"/>`,
		"fallback": "heroicons-solid:arrow-narrow-right",
	});
}

export default Component;
