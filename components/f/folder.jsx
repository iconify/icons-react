import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-kcr6bwn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-kcr6bwn"/>`,
		"fallback": "heroicons-solid:folder",
	});
}

export default Component;
