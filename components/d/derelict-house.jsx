import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m5zvr65ac.css';
import '../../css/b/beg8en7ps.css';
import '../../css/b/b4cbrjb-x.css';
import '../../css/m/m5y224bqm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m5zvr65ac"/><path class="beg8en7ps"/><path class="b4cbrjb-x"/><path class="m5y224bqm"/></g>`,
		"fallback": "fluent-emoji-flat:derelict-house",
	});
}

export default Component;
