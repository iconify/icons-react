import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryfw78bab.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryfw78bab"/>`,
		"fallback": "selfhst:apple-podcasts-dark",
	});
}

export default Component;
