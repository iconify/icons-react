import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k7c-e9bvf.css';
import '../../css/n/nzec2cctc.css';
import '../../css/b/bq6qtbbyc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k7c-e9bvf"/><path class="nzec2cctc"/><path class="bq6qtbbyc"/></g>`,
		"fallback": "streamline-color:ear-hearing",
	});
}

export default Component;
