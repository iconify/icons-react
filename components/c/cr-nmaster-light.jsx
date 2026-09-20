import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2crndbgo.css';
import '../../css/c/c3jcscciy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2crndbgo"/><path class="c3jcscciy"/>`,
		"fallback": "selfhst:cr-nmaster-light",
	});
}

export default Component;
