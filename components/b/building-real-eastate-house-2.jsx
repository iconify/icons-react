import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz01e0bkd.css';
import '../../css/m/mmrm4kbcu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz01e0bkd"/><path class="mmrm4kbcu"/>`,
		"fallback": "streamline-pixel:building-real-eastate-house-2",
	});
}

export default Component;
