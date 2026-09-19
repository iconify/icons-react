import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt71qjbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt71qjbyt"/>`,
		"fallback": "flowbite:folder-open-outline",
	});
}

export default Component;
