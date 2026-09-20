import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnia1ubeb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnia1ubeb"/>`,
		"fallback": "selfhst:amazon-web-services-dark",
	});
}

export default Component;
