import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y41-qlm3b.css';
import '../../css/l/l3zj_8btg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y41-qlm3b"/><path class="l3zj_8btg"/>`,
		"fallback": "streamline-pixel:coding-apps-websites-android",
	});
}

export default Component;
