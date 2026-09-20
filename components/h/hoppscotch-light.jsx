import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z16yr1b4k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z16yr1b4k"/>`,
		"fallback": "selfhst:hoppscotch-light",
	});
}

export default Component;
