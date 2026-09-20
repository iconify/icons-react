import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_4157bgu.css';
import '../../css/f/frw4m7ekt.css';
import '../../css/e/ehesr7bob.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_4157bgu"/><path class="frw4m7ekt"/><path class="ehesr7bob"/>`,
		"fallback": "streamline-pixel:design-color-bucket",
	});
}

export default Component;
