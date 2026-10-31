import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ih42gnb9k.css';
import '../../css/a/ap0hj0b2d.css';
import '../../css/c/c6dw3-wpw.css';
import '../../css/k/k0_w-1byi.css';
import '../../css/d/dye5blb0m.css';
import '../../css/c/cea4rbbmn.css';
import '../../css/a/a8r1x4muo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ih42gnb9k wm-k"/><path class="ap0hj0b2d wm-a"/><path class="c6dw3-wpw wm-deco"/><path class="k0_w-1byi wm-k"/><path class="dye5blb0m wm-a"/><path class="cea4rbbmn wm-shadow"/><path class="a8r1x4muo wm-shine"/></g>`,
		"fallback": "withicons-valentine:hammer",
	});
}

export default Component;
