import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypa0l_ben.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypa0l_ben"/>`,
		"fallback": "icons8:exclamation-mark",
	});
}

export default Component;
