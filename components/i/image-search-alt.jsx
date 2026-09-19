import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev-_rkitm.css';
import '../../css/l/lxavlrbta.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev-_rkitm"/><path class="lxavlrbta"/>`,
		"fallback": "carbon:image-search-alt",
	});
}

export default Component;
