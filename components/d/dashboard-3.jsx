import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgg5pv8eb.css';
import '../../css/a/af0phaczy.css';
import '../../css/c/cxg28ucqs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zgg5pv8eb"/><path class="af0phaczy"/><path class="cxg28ucqs"/></g>`,
		"fallback": "streamline-flex-color:dashboard-3",
	});
}

export default Component;
