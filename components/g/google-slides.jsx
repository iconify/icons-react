import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlxzqobyy.css';
import '../../css/y/y5z6dwezu.css';
import '../../css/a/akcxopd1a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlxzqobyy"/><path class="y5z6dwezu"/><path class="akcxopd1a"/>`,
		"fallback": "selfhst:google-slides",
	});
}

export default Component;
