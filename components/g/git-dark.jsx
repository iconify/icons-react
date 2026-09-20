import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpclhhb1k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpclhhb1k"/>`,
		"fallback": "selfhst:git-dark",
	});
}

export default Component;
