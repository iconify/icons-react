import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e88j4obis.css';
import '../../css/s/ssrs1t0fy.css';
import '../../css/e/ezjwoqeev.css';
import '../../css/z/zsi24acex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e88j4obis"/><path class="ssrs1t0fy"/><path class="ezjwoqeev"/><path class="zsi24acex"/>`,
		"fallback": "gcp:anthos",
	});
}

export default Component;
