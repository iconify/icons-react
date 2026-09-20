import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj8eq7bqb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj8eq7bqb"/>`,
		"fallback": "selfhst:alibaba",
	});
}

export default Component;
