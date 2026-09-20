import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwsejm1ge.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwsejm1ge"/>`,
		"fallback": "selfhst:android-dark",
	});
}

export default Component;
