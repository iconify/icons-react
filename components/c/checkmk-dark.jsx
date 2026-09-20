import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbd7ul27k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbd7ul27k"/>`,
		"fallback": "selfhst:checkmk-dark",
	});
}

export default Component;
