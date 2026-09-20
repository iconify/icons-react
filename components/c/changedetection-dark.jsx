import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3k__wbec.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3k__wbec"/>`,
		"fallback": "selfhst:changedetection-dark",
	});
}

export default Component;
