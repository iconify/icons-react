import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbamd212o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hbamd212o"/>`,
		"fallback": "heroicons-solid:exclamation-triangle",
	});
}

export default Component;
