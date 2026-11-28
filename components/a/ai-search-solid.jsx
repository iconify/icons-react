import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc7r3hb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc7r3hb3m"/>`,
		"fallback": "iconaut:ai-search-solid",
	});
}

export default Component;
