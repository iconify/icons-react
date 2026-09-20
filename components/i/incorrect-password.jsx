import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tq-ckxb8d.css';
import '../../css/c/c_2fu4wko.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tq-ckxb8d"/><path class="c_2fu4wko"/></g>`,
		"fallback": "streamline-flex-color:incorrect-password",
	});
}

export default Component;
