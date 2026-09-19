import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stzldcb9k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="stzldcb9k"/>`,
		"fallback": "heroicons:exclamation-circle-20-solid",
	});
}

export default Component;
