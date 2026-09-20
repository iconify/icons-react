import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te8lzdv-n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te8lzdv-n"/>`,
		"fallback": "selfhst:autokitteh-dark",
	});
}

export default Component;
