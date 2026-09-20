import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c9q50ykjp.css';
import '../../css/s/stnpv2_pr.css';
import '../../css/z/z4hx3cbxj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c9q50ykjp"/><path clip-rule="evenodd" class="stnpv2_pr"/><path class="z4hx3cbxj"/></g>`,
		"fallback": "streamline-color:contact-phonebook-2-flat",
	});
}

export default Component;
