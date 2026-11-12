import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jao-hnd7y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jao-hnd7y"/>`,
		"fallback": "selfhst:donetick-dark",
	});
}

export default Component;
