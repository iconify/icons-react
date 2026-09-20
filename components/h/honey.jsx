import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iirs8ac6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iirs8ac6j"/>`,
		"fallback": "simple-icons:honey",
	});
}

export default Component;
