import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8o44pbya.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8o44pbya"/>`,
		"fallback": "selfhst:hewlett-packard-enterprise-dark",
	});
}

export default Component;
