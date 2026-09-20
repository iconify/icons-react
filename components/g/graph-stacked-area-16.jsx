import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh4ji-bcc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh4ji-bcc"/>`,
		"fallback": "octicon:graph-stacked-area-16",
	});
}

export default Component;
