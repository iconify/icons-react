import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4hz1de1v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4hz1de1v"/>`,
		"fallback": "heroicons-solid:collection",
	});
}

export default Component;
