import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqzvsjbqs.css';
import '../../css/j/j5k65pgym.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqzvsjbqs"/><path class="j5k65pgym"/>`,
		"fallback": "selfhst:bludit",
	});
}

export default Component;
