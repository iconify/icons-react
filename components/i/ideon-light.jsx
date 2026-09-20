import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8m3v-bnx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8m3v-bnx"/>`,
		"fallback": "selfhst:ideon-light",
	});
}

export default Component;
