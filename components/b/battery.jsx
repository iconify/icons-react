import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-cl05b2s.css';

const viewBox = {"width":216,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-cl05b2s"/>`,
		"fallback": "zmdi:battery",
	});
}

export default Component;
