import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-aeptbmb.css';
import '../../css/b/bw5jyhiyf.css';
import '../../css/p/prgqsmbhl.css';
import '../../css/m/mltw092_g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k-aeptbmb"/><path class="bw5jyhiyf"/><path class="prgqsmbhl"/><path class="mltw092_g"/></g>`,
		"fallback": "streamline-color:crutch",
	});
}

export default Component;
