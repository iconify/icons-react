import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tt9dk1bsu.css';
import '../../css/q/qc0_mme8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tt9dk1bsu"/><path class="qc0_mme8n"/></g>`,
		"fallback": "lets-icons:drink-light",
	});
}

export default Component;
