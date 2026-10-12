import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/halp-acqy.css';
import '../../css/t/tq-j1acxu.css';
import '../../css/m/mtjpkqjpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="halp-acqy"/><path class="tq-j1acxu"/><path class="mtjpkqjpg"/></g>`,
		"fallback": "andrsrxn:file-heart",
	});
}

export default Component;
