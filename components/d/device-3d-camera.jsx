import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uow61wbyz.css';
import '../../css/r/ry2rqsybn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uow61wbyz"/><path class="ry2rqsybn"/></g>`,
		"fallback": "tabler:device-3d-camera",
	});
}

export default Component;
