import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cbigh_bdo.css';
import '../../css/k/kmz_m4qzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cbigh_bdo"/><path class="kmz_m4qzj"/></g>`,
		"fallback": "vadivam:house-wifi",
	});
}

export default Component;
