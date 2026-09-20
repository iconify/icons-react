import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqgil-9zh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqgil-9zh"/>`,
		"fallback": "ix:chevron-right-small",
	});
}

export default Component;
