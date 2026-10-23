import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lb08ifx0d.css';
import '../../css/j/jmfcuc9vp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lb08ifx0d"/><path class="jmfcuc9vp"/></g>`,
		"fallback": "vadivam:cctv-off",
	});
}

export default Component;
