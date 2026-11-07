import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nerijcc5y.css';
import '../../css/f/fsxwe0nbu.css';
import '../../css/g/girv7pn6s.css';
import '../../css/n/n-dhbzbjq.css';
import '../../css/x/xvjk-cbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nerijcc5y"/><path class="fsxwe0nbu"/><path class="girv7pn6s"/><path class="n-dhbzbjq"/><path class="xvjk-cbox"/></g>`,
		"fallback": "solar:full-screen-square-linear",
	});
}

export default Component;
