import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acdtw7b8z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acdtw7b8z"/>`,
		"fallback": "selfhst:appwrite",
	});
}

export default Component;
