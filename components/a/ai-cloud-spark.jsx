import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jhw_njbry.css';
import '../../css/n/nronarbyq.css';
import '../../css/l/lu98oxcho.css';
import '../../css/a/advt48bsn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jhw_njbry"/><path class="nronarbyq"/><path class="lu98oxcho"/><path class="advt48bsn"/></g>`,
		"fallback": "streamline-color:ai-cloud-spark",
	});
}

export default Component;
