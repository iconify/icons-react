import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfuhywbmz.css';
import '../../css/c/ckv8-4w9v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfuhywbmz"/><path clip-rule="evenodd" class="ckv8-4w9v"/>`,
		"fallback": "streamline-block:basic-ui-time-2",
	});
}

export default Component;
