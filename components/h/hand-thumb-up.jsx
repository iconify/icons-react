import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbl7lh2ya.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbl7lh2ya"/>`,
		"fallback": "heroicons-solid:hand-thumb-up",
	});
}

export default Component;
