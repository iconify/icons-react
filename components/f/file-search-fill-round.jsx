import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-_o76b0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-_o76b0r"/>`,
		"fallback": "coolicons:file-search-fill-round",
	});
}

export default Component;
