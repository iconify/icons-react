import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn2rnrqnd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn2rnrqnd"/>`,
		"fallback": "fa7-solid:earth-africa",
	});
}

export default Component;
