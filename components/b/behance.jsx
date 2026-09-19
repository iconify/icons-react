import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u076ouqcu.css';

const viewBox = {"width":31,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u076ouqcu"/>`,
		"fallback": "fontisto:behance",
	});
}

export default Component;
