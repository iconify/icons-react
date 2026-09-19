import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqreai28o.css';

const viewBox = {"width":272,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqreai28o"/>`,
		"fallback": "zmdi:google-old",
	});
}

export default Component;
