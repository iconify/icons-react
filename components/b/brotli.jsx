import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krbfg6bkd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krbfg6bkd"/>`,
		"fallback": "file-icons:brotli",
	});
}

export default Component;
