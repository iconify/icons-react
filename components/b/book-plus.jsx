import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz_fsnb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz_fsnb0a"/>`,
		"fallback": "keyline-icons:book-plus",
	});
}

export default Component;
