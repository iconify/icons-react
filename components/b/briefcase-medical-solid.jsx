import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i4owefbiv.css';
import '../../css/g/g91qa5pir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="i4owefbiv"/><path class="g91qa5pir wm-a"/></g>`,
		"fallback": "withicons:briefcase-medical-solid",
	});
}

export default Component;
