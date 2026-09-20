import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zavz-4t8u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zavz-4t8u"/>`,
		"fallback": "selfhst:hyperhdr-light",
	});
}

export default Component;
