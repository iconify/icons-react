import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ees4jqgyz.css';

const viewBox = {"width":500,"height":500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ees4jqgyz"/>`,
		"fallback": "selfhst:gotify-dark",
	});
}

export default Component;
