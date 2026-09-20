import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwj6fiudg.css';

const viewBox = {"width":260,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwj6fiudg"/>`,
		"fallback": "thesvg-color:curseforge-dark",
	});
}

export default Component;
