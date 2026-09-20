import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjygv35-i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjygv35-i"/>`,
		"fallback": "osmic:florist-14",
	});
}

export default Component;
