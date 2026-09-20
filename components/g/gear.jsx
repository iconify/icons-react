import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo-sakbpd.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo-sakbpd"/>`,
		"fallback": "octicon:gear",
	});
}

export default Component;
