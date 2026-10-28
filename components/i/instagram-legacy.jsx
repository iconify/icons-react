import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-swyr_3z.css';

const viewBox = {"width":512,"height":146};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-swyr_3z"/>`,
		"fallback": "thesvg-color:instagram-legacy",
	});
}

export default Component;
