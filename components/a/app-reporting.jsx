import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yw___4blj.css';
import '../../css/j/je4ew4b4l.css';
import '../../css/z/zu7q_pbrq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yw___4blj"/><path class="je4ew4b4l"/><path class="ouiIcon__fillSecondary zu7q_pbrq"/></g>`,
		"fallback": "oui:app-reporting",
	});
}

export default Component;
