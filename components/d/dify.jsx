import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu0jvvbas.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu0jvvbas"/>`,
		"fallback": "selfhst:dify",
	});
}

export default Component;
