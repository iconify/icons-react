import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxuo3p-of.css';

const viewBox = {"width":640,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxuo3p-of"/>`,
		"fallback": "fa:arrows-v",
	});
}

export default Component;
