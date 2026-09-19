import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh-fjtb-j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh-fjtb-j"/>`,
		"fallback": "cryptocurrency:cc",
	});
}

export default Component;
