import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wjb1pxq6i.css';
import '../../css/m/mtcm9ky7m.css';
import '../../css/x/xbywnw3_y.css';
import '../../css/t/tiyiqikmg.css';
import '../../css/j/jn1ozccmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wjb1pxq6i wm-shadow"/><path class="mtcm9ky7m"/><path class="xbywnw3_y"/><path class="tiyiqikmg"/><path class="jn1ozccmg wm-s"/></g>`,
		"fallback": "withicons-retro:firecracker-string",
	});
}

export default Component;
