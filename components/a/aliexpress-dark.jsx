import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b09u8ms8j.css';
import '../../css/x/xyyx10_gh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b09u8ms8j"/><path class="xyyx10_gh"/>`,
		"fallback": "selfhst:aliexpress-dark",
	});
}

export default Component;
