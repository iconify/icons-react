import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad24a10fo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad24a10fo"/>`,
		"fallback": "selfhst:haven-dark",
	});
}

export default Component;
