import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcrs9-qzk.css';
import '../../css/r/rtwbx3bhp.css';
import '../../css/s/so8rb_4ei.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcrs9-qzk"/><path class="rtwbx3bhp"/><path class="so8rb_4ei"/>`,
		"fallback": "carbon:ibm-launchpad-s4",
	});
}

export default Component;
