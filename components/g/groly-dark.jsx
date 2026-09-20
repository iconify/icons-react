import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb8q_2bvr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb8q_2bvr"/>`,
		"fallback": "selfhst:groly-dark",
	});
}

export default Component;
