import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ej8a_q71d.css';
import '../../css/h/h3jot2smo.css';
import '../../css/f/fu_f8lhid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ej8a_q71d"/><path class="h3jot2smo"/><path class="fu_f8lhid"/></g>`,
		"fallback": "lucide:boxes-linked",
	});
}

export default Component;
