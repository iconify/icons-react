import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfqdlls5m.css';
import '../../css/u/uhxg3ozyr.css';

const viewBox = {"width":250,"height":250};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfqdlls5m"/><path class="uhxg3ozyr"/>`,
		"fallback": "thesvg-color:charles-schwab",
	});
}

export default Component;
