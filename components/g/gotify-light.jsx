import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l07xxkbqg.css';

const viewBox = {"width":500,"height":500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l07xxkbqg"/>`,
		"fallback": "selfhst:gotify-light",
	});
}

export default Component;
