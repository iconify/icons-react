import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nfcgacc9w.css';
import '../../css/k/kog31dp3w.css';
import '../../css/o/o9b-osuxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nfcgacc9w"/><path class="kog31dp3w"/><circle class="o9b-osuxb"/></g>`,
		"fallback": "lucide:hand-truck",
	});
}

export default Component;
