import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kco8tpa1g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kco8tpa1g"/>`,
		"fallback": "ion:caret-down-circle",
	});
}

export default Component;
