import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wd_dzvh1l.css';
import '../../css/y/ykiup4blc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wd_dzvh1l"/><path class="ykiup4blc"/></g>`,
		"fallback": "keyline-icons:file-arrow-up-fill",
	});
}

export default Component;
