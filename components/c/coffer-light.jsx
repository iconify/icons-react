import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrfln6yfo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrfln6yfo"/>`,
		"fallback": "selfhst:coffer-light",
	});
}

export default Component;
