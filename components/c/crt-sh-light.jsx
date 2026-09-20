import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9kqq8b6a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9kqq8b6a"/>`,
		"fallback": "selfhst:crt-sh-light",
	});
}

export default Component;
