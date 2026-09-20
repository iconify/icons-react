import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_2xr6bmb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_2xr6bmb"/>`,
		"fallback": "selfhst:apache-answer-dark",
	});
}

export default Component;
