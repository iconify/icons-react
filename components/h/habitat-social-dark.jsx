import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omrt5kbbp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omrt5kbbp"/>`,
		"fallback": "selfhst:habitat-social-dark",
	});
}

export default Component;
