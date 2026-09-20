import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rssfh2bry.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rssfh2bry"/>`,
		"fallback": "selfhst:anonaddy-dark",
	});
}

export default Component;
