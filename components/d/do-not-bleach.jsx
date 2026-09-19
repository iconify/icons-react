import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trmplo9ub.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trmplo9ub"/>`,
		"fallback": "ps:do-not-bleach",
	});
}

export default Component;
