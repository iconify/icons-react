import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hz3-nmbhf.css';
import '../../css/l/l0gl311-i.css';
import '../../css/q/qp1nq7i5t.css';
import '../../css/g/gmt8_imjx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="hz3-nmbhf"/><path class="l0gl311-i"/><path class="qp1nq7i5t"/><path class="gmt8_imjx"/></g>`,
		"fallback": "icon-park:envelope",
	});
}

export default Component;
