import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf70rmbfu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf70rmbfu"/>`,
		"fallback": "fa7-solid:fingerprint",
	});
}

export default Component;
