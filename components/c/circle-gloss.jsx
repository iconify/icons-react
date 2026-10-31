import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy9r3v0qg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy9r3v0qg"/>`,
		"fallback": "withicons:circle-gloss",
	});
}

export default Component;
