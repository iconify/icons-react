import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/kioy7272c.css';
import '../../css/q/qg3owvukv.css';
import '../../css/o/ooj8cp7ju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="kioy7272c wm-shadow"/><path class="qg3owvukv wm-shadow"/><path class="ooj8cp7ju"/></g>`,
		"fallback": "withicons-brutal:chevron-last",
	});
}

export default Component;
