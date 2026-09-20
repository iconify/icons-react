import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm677u6yi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm677u6yi"/>`,
		"fallback": "selfhst:cryptgeon-light",
	});
}

export default Component;
