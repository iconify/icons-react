import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hot9fjbuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hot9fjbuy"/>`,
		"fallback": "ci:close-lg",
	});
}

export default Component;
