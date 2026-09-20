import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qw3116blp.css';
import '../../css/m/mbetw1bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qw3116blp"/><path class="mbetw1bgk"/></g>`,
		"fallback": "solar:display-line-duotone",
	});
}

export default Component;
