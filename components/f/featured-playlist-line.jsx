import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq99g-23z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq99g-23z"/>`,
		"fallback": "si:featured-playlist-line",
	});
}

export default Component;
