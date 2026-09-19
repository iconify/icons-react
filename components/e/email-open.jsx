import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzi65lbfq.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzi65lbfq"/>`,
		"fallback": "zmdi:email-open",
	});
}

export default Component;
