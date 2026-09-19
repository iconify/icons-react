import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okfctab9u.css';

const viewBox = {"width":320,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okfctab9u"/>`,
		"fallback": "zmdi:arrow-in",
	});
}

export default Component;
