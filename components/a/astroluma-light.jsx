import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6wn3rbzs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6wn3rbzs"/>`,
		"fallback": "selfhst:astroluma-light",
	});
}

export default Component;
