import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8_pid-oz.css';
import '../../css/d/dbej1sbsv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8_pid-oz"/><path class="dbej1sbsv"/>`,
		"fallback": "cil:header",
	});
}

export default Component;
