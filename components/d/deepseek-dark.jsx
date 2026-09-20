import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz5kt1b4o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz5kt1b4o"/>`,
		"fallback": "selfhst:deepseek-dark",
	});
}

export default Component;
