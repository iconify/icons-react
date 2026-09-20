import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nwy40kvrr.css';
import '../../css/h/h9vnbdbem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nwy40kvrr"/><path class="h9vnbdbem"/></g>`,
		"fallback": "vadivam:battery-charging",
	});
}

export default Component;
