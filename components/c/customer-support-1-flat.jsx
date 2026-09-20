import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gjmkbeb1i.css';
import '../../css/n/n73sknbnu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gjmkbeb1i"/><path class="n73sknbnu"/></g>`,
		"fallback": "streamline-color:customer-support-1-flat",
	});
}

export default Component;
