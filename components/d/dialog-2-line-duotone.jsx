import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r9-on9bwz.css';
import '../../css/q/q2o88f4-t.css';
import '../../css/c/c8pup_4kf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r9-on9bwz"/><path class="q2o88f4-t"/><path class="c8pup_4kf"/></g>`,
		"fallback": "solar:dialog-2-line-duotone",
	});
}

export default Component;
