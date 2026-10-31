import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p50i-xbue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p50i-xbue"/>`,
		"fallback": "withicons:corner-up-left-gloss",
	});
}

export default Component;
