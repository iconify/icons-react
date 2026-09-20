import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zheynwbwf.css';
import '../../css/p/pr7drww8h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zheynwbwf"/><path class="pr7drww8h"/>`,
		"fallback": "streamline-pixel:design-color-spray",
	});
}

export default Component;
