import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/avo-wdpwn.css';
import '../../css/r/re0u7rbnb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="avo-wdpwn"/><path class="re0u7rbnb"/></g>`,
		"fallback": "streamline-color:flash-3",
	});
}

export default Component;
