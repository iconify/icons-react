import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fws8j6bqq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fws8j6bqq"/>`,
		"fallback": "selfhst:cnbc-light",
	});
}

export default Component;
