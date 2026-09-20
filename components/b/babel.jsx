import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hcm8reluy.css';
import '../../css/r/rou0gmbnx.css';
import '../../css/u/ukj1ozbdo.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="hcm8reluy"/><path class="rou0gmbnx"/><path class="ukj1ozbdo"/></g>`,
		"fallback": "skill-icons:babel",
	});
}

export default Component;
