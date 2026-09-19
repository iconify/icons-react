import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytmtt4p6v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytmtt4p6v"/>`,
		"fallback": "fa6-solid:baseball-bat-ball",
	});
}

export default Component;
