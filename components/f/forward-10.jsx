import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olgjpxlkq.css';

const viewBox = {"width":344,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olgjpxlkq"/>`,
		"fallback": "zmdi:forward-10",
	});
}

export default Component;
