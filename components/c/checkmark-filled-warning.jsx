import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo-01obuo.css';
import '../../css/w/wz_fdacbr.css';
import '../../css/c/cyoweacxi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo-01obuo"/><path class="wz_fdacbr"/><path class="cyoweacxi"/>`,
		"fallback": "carbon:checkmark-filled-warning",
	});
}

export default Component;
