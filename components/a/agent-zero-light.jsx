import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usdkizb6f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usdkizb6f"/>`,
		"fallback": "selfhst:agent-zero-light",
	});
}

export default Component;
