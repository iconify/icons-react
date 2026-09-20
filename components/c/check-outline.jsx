import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3m6362cm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3m6362cm"/>`,
		"fallback": "lsicon:check-outline",
	});
}

export default Component;
