import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dw5ytqb0r.css';
import '../../css/q/qxer-psyq.css';
import '../../css/p/puqf4_wsy.css';
import '../../css/k/kh7vpdbfc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dw5ytqb0r"/><path class="qxer-psyq"/><path class="puqf4_wsy"/><path class="kh7vpdbfc"/></g>`,
		"fallback": "streamline-color:decent-work-and-economic-growth",
	});
}

export default Component;
