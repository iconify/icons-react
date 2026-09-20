import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnm-5gseg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnm-5gseg"/>`,
		"fallback": "selfhst:bandcamp-dark",
	});
}

export default Component;
