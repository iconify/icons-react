import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tnrc7_bry.css';
import '../../css/y/yjt-ee8as.css';
import '../../css/h/hrhhzjb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tnrc7_bry"/><path class="yjt-ee8as"/><path class="hrhhzjb2t"/></g>`,
		"fallback": "reicon:circle-info",
	});
}

export default Component;
