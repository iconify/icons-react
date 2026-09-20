import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3rfa6bux.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3rfa6bux"/>`,
		"fallback": "selfhst:hashicorp-boundary-dark",
	});
}

export default Component;
