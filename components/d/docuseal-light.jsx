import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2ee7r-6v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2ee7r-6v"/>`,
		"fallback": "selfhst:docuseal-light",
	});
}

export default Component;
