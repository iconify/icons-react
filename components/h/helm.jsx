import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk02ikb1b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk02ikb1b"/>`,
		"fallback": "selfhst:helm",
	});
}

export default Component;
