import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm3g_gb3o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm3g_gb3o"/>`,
		"fallback": "fa-regular:envelope",
	});
}

export default Component;
