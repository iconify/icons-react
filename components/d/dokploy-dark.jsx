import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yequ1mb2m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yequ1mb2m"/>`,
		"fallback": "selfhst:dokploy-dark",
	});
}

export default Component;
