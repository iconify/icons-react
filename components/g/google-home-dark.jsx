import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjgsc_5dy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjgsc_5dy"/>`,
		"fallback": "selfhst:google-home-dark",
	});
}

export default Component;
