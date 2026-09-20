import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nc83wlcet.css';
import '../../css/i/ig4somb9d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nc83wlcet"/><path class="ig4somb9d"/></g>`,
		"fallback": "streamline-flex-color:crown",
	});
}

export default Component;
