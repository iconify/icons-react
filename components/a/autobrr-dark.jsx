import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xht49n9ef.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xht49n9ef"/>`,
		"fallback": "selfhst:autobrr-dark",
	});
}

export default Component;
