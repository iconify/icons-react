import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m9424_g_h.css';
import '../../css/u/uqwhvmb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m9424_g_h"/><path class="uqwhvmb5h"/></g>`,
		"fallback": "vadivam:clock-arrow-right",
	});
}

export default Component;
