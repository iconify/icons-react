import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wq2qf5bxs.css';
import '../../css/q/qzb9ftb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wq2qf5bxs"/><path class="qzb9ftb2f"/></g>`,
		"fallback": "vadivam:baggage-claim",
	});
}

export default Component;
