import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_m-5vevq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_m-5vevq"/>`,
		"fallback": "ix:data-ingress",
	});
}

export default Component;
