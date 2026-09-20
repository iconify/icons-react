import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq_95nb0y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq_95nb0y"/>`,
		"fallback": "selfhst:chase",
	});
}

export default Component;
