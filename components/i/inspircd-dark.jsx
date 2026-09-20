import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxfqaptkz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxfqaptkz"/>`,
		"fallback": "selfhst:inspircd-dark",
	});
}

export default Component;
