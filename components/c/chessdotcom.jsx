import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u58tcab0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u58tcab0k"/>`,
		"fallback": "simple-icons:chessdotcom",
	});
}

export default Component;
