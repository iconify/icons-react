import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f3r6jjb4a.css';
import '../../css/w/wd0d19c5p.css';
import '../../css/q/qvcnntb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f3r6jjb4a"/><rect class="wd0d19c5p"/><rect class="qvcnntb-j"/></g>`,
		"fallback": "majesticons:align-right-line",
	});
}

export default Component;
