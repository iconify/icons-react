import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5i7l73zx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5i7l73zx"/>`,
		"fallback": "selfhst:apple-music-dark",
	});
}

export default Component;
