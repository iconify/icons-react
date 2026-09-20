import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li2y6fx6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li2y6fx6p"/>`,
		"fallback": "thesvg-color:appmanager",
	});
}

export default Component;
