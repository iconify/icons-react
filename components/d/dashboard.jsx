import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2c71bctq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2c71bctq"/>`,
		"fallback": "octicon:dashboard",
	});
}

export default Component;
