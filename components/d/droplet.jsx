import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i7pf5v_rd.css';
import '../../css/t/t46qu6_oj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i7pf5v_rd"/><path class="t46qu6_oj"/></g>`,
		"fallback": "vadivam:droplet",
	});
}

export default Component;
