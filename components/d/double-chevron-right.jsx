import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkt748d0e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkt748d0e"/>`,
		"fallback": "carbon:double-chevron-right",
	});
}

export default Component;
