import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-hw09zhx.css';
import '../../css/b/bbzizl2ta.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-hw09zhx"/><path class="bbzizl2ta"/>`,
		"fallback": "streamline-block:devices-microphone",
	});
}

export default Component;
