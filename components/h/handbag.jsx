import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nzracdq1u.css';
import '../../css/l/lww1sfn2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nzracdq1u"/><path class="lww1sfn2c"/></g>`,
		"fallback": "vadivam:handbag",
	});
}

export default Component;
