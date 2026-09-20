import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a0htiqbag.css';
import '../../css/u/ugw1omula.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a0htiqbag"/><circle class="ugw1omula"/></g>`,
		"fallback": "lucide:bell-dot",
	});
}

export default Component;
