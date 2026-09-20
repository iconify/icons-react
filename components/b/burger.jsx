import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qcgv7bbeo.css';
import '../../css/d/d3ymd0bzr.css';
import '../../css/a/apqi7kbbe.css';
import '../../css/m/muyq1bcpu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qcgv7bbeo"/><path class="d3ymd0bzr"/><path class="apqi7kbbe"/><path class="muyq1bcpu"/></g>`,
		"fallback": "streamline-color:burger",
	});
}

export default Component;
