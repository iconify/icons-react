import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/py_vprdeb.css';
import '../../css/c/cx5_hlbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="py_vprdeb"/><rect class="cx5_hlbox"/></g>`,
		"fallback": "lucide:briefcase-business",
	});
}

export default Component;
