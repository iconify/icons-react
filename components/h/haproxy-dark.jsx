import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w29l6ybjj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w29l6ybjj"/>`,
		"fallback": "selfhst:haproxy-dark",
	});
}

export default Component;
