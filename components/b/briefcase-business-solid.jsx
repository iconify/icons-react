import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sdo3s5gsn.css';
import '../../css/g/g91qa5pir.css';
import '../../css/m/mx2e90gcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="sdo3s5gsn"/><path class="g91qa5pir wm-a"/><path class="mx2e90gcg wm-s"/></g>`,
		"fallback": "withicons:briefcase-business-solid",
	});
}

export default Component;
