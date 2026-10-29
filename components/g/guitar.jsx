import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fvsrwbc4v.css';
import '../../css/n/nsxj8k18x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fvsrwbc4v"/><path class="nsxj8k18x"/></g>`,
		"fallback": "vadivam:guitar",
	});
}

export default Component;
