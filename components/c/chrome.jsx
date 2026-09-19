import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shpzc8bzi.css';
import '../../css/h/h9q4084iu.css';
import '../../css/p/pj3y1bc7z.css';
import '../../css/u/u-y_iqbft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shpzc8bzi"/><path class="h9q4084iu"/><path class="pj3y1bc7z"/><path class="u-y_iqbft"/>`,
		"fallback": "bxl:chrome",
	});
}

export default Component;
