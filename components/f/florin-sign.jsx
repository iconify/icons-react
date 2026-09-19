import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs31excvm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs31excvm"/>`,
		"fallback": "fa7-solid:florin-sign",
	});
}

export default Component;
