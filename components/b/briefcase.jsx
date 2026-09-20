import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hk8_rhbyh.css';
import '../../css/c/cx5_hlbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hk8_rhbyh"/><rect class="cx5_hlbox"/></g>`,
		"fallback": "lucide:briefcase",
	});
}

export default Component;
