import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_a2bxboy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y_a2bxboy"/>`,
		"fallback": "sidekickicons:cloud-slash-20-solid",
	});
}

export default Component;
