import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpmmq_k7s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpmmq_k7s"/>`,
		"fallback": "selfhst:fireshare-dark",
	});
}

export default Component;
