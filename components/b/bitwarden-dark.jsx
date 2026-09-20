import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6m3kabfl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6m3kabfl"/>`,
		"fallback": "selfhst:bitwarden-dark",
	});
}

export default Component;
