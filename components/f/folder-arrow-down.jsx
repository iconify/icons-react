import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anw1r7b-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anw1r7b-f"/>`,
		"fallback": "mdi:folder-arrow-down",
	});
}

export default Component;
