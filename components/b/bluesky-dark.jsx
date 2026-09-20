import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzz0615qq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzz0615qq"/>`,
		"fallback": "selfhst:bluesky-dark",
	});
}

export default Component;
