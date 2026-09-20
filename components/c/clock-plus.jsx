import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f_gk21s3y.css';
import '../../css/q/qa1zkgv2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f_gk21s3y"/><path class="qa1zkgv2x"/></g>`,
		"fallback": "lucide:clock-plus",
	});
}

export default Component;
