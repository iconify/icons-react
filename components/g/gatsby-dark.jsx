import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds5xzyo8n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds5xzyo8n"/>`,
		"fallback": "selfhst:gatsby-dark",
	});
}

export default Component;
