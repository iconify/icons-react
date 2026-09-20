import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s70alw0hw.css';
import '../../css/x/xfpff0_9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s70alw0hw"/><path class="xfpff0_9r"/></g>`,
		"fallback": "vadivam:beaker",
	});
}

export default Component;
