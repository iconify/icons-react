import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di7sjtb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di7sjtb7c"/>`,
		"fallback": "fontisto:apple-music",
	});
}

export default Component;
