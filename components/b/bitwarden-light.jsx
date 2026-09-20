import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qji0dibyd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qji0dibyd"/>`,
		"fallback": "selfhst:bitwarden-light",
	});
}

export default Component;
