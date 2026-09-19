import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r395g07qn.css';
import '../../css/q/qc4aecbyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r395g07qn"/><path class="qc4aecbyb"/></g>`,
		"fallback": "healthicons:hl7v2-logo-outline-24px",
	});
}

export default Component;
