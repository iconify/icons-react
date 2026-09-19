import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zddm9435c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zddm9435c"/>`,
		"fallback": "flowbite:inbox-full-outline",
	});
}

export default Component;
