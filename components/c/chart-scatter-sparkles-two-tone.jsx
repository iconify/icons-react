import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wkzrmibkf.css';
import '../../css/e/ev1qemo5r.css';
import '../../css/y/yfmf3s9ul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wkzrmibkf"/><path class="ev1qemo5r"/><path class="yfmf3s9ul"/></g>`,
		"fallback": "keyline-icons:chart-scatter-sparkles-two-tone",
	});
}

export default Component;
