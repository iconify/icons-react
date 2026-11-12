import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyyohs43y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyyohs43y"/>`,
		"fallback": "selfhst:airtrail",
	});
}

export default Component;
