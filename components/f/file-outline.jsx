import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/rbbqkwi5y.css';
import '../../css/h/h3wpatyos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="rbbqkwi5y"/><path class="h3wpatyos"/></g>`,
		"fallback": "bitcoin-icons:file-outline",
	});
}

export default Component;
