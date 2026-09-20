import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awmhadc1u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awmhadc1u"/>`,
		"fallback": "selfhst:grass-io-light",
	});
}

export default Component;
