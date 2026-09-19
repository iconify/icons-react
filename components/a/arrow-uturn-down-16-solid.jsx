import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5lure36s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h5lure36s"/>`,
		"fallback": "heroicons:arrow-uturn-down-16-solid",
	});
}

export default Component;
