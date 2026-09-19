import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6hqopx1s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6hqopx1s"/>`,
		"fallback": "fa6-regular:circle-left",
	});
}

export default Component;
