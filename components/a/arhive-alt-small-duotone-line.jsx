import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/upl6jhogv.css';
import '../../css/e/ensjx7pgv.css';
import '../../css/n/n272eybxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="upl6jhogv"/><path class="ensjx7pgv"/><path class="n272eybxa"/></g>`,
		"fallback": "lets-icons:arhive-alt-small-duotone-line",
	});
}

export default Component;
