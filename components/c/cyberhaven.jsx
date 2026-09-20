import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi-hyiv2s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi-hyiv2s"/>`,
		"fallback": "selfhst:cyberhaven",
	});
}

export default Component;
