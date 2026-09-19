import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av_80kbba.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av_80kbba"/>`,
		"fallback": "cryptocurrency:bcd",
	});
}

export default Component;
