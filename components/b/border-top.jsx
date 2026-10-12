import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o5h1epbfq.css';
import '../../css/q/qc_-7vbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(90 20.6 2.05)" class="o5h1epbfq"/><path class="qc_-7vbqw"/></g>`,
		"fallback": "andrsrxn:border-top",
	});
}

export default Component;
