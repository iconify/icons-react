import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0esvozoi.css';
import '../../css/y/ykhcx6d8l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0esvozoi"/><path class="ykhcx6d8l"/>`,
		"fallback": "carbon:application-web",
	});
}

export default Component;
