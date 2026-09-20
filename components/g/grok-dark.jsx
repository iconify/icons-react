import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgj0rn0ja.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgj0rn0ja"/>`,
		"fallback": "selfhst:grok-dark",
	});
}

export default Component;
