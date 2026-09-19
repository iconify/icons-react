import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-mjqqb6k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c-mjqqb6k"/>`,
		"fallback": "heroicons-solid:arrows-up-down",
	});
}

export default Component;
