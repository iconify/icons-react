import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5gn_5b0o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5gn_5b0o"/>`,
		"fallback": "selfhst:faved-dark",
	});
}

export default Component;
