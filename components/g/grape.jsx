import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vl_udub0j.css';
import '../../css/i/i-uboqb4e.css';
import '../../css/m/mywoygpuk.css';
import '../../css/s/syie46eid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vl_udub0j"/><path class="i-uboqb4e"/><path class="mywoygpuk"/><path class="syie46eid"/></g>`,
		"fallback": "tabler:grape",
	});
}

export default Component;
