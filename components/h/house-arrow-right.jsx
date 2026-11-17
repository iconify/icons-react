import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/drsalhr_b.css';
import '../../css/x/x41a5xb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="drsalhr_b"/><path class="x41a5xb1r"/></g>`,
		"fallback": "lucide:house-arrow-right",
	});
}

export default Component;
