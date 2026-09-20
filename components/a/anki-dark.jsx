import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_05kwblf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_05kwblf"/>`,
		"fallback": "selfhst:anki-dark",
	});
}

export default Component;
