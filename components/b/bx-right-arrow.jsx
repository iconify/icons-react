import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doeoiqb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="doeoiqb0y"/>`,
		"fallback": "bx:bx-right-arrow",
	});
}

export default Component;
