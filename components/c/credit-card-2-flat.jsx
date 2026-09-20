import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/urkil0hoe.css';
import '../../css/p/poavjmspy.css';
import '../../css/u/uiw3i6b0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="urkil0hoe"/><path class="poavjmspy"/><path class="uiw3i6b0o"/></g>`,
		"fallback": "streamline-sharp-color:credit-card-2-flat",
	});
}

export default Component;
