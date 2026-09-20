import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7hw7w48k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7hw7w48k"/>`,
		"fallback": "selfhst:getcomics-light",
	});
}

export default Component;
