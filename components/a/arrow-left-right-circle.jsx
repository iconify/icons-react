import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y1_mtyflw.css';
import '../../css/h/h_8y3cbtj.css';
import '../../css/p/pqxth-b_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y1_mtyflw"/><path class="h_8y3cbtj"/><path class="pqxth-b_w"/></g>`,
		"fallback": "tdesign:arrow-left-right-circle",
	});
}

export default Component;
