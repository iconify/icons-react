import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xla7vihkb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xla7vihkb"/>`,
		"fallback": "heroicons-solid:folder-remove",
	});
}

export default Component;
