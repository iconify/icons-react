import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk5v1wbtf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk5v1wbtf"/>`,
		"fallback": "selfhst:flowinquiry",
	});
}

export default Component;
