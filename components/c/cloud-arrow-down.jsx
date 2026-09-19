import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmvj3rb8q.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmvj3rb8q"/>`,
		"fallback": "fa6-solid:cloud-arrow-down",
	});
}

export default Component;
