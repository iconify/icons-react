import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/raytajbvb.css';
import '../../css/s/sez2fgw8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="raytajbvb"/><path class="sez2fgw8l"/>`,
		"fallback": "streamline-ultimate:book-open-bookmark-bold",
	});
}

export default Component;
