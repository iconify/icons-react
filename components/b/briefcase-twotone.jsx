import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/k/k2hxuz.css';
import '../../css/s/sjhm0t.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-64.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew k2hxuz"/><path class="iw1iew sjhm0t"/>`,
		"fallback": "line-md:briefcase-twotone",
	});
}

export default Component;
