import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d2-cxqb-b.css';
import '../../css/i/i5ns3k62z.css';
import '../../css/q/q7ucmccqb.css';
import '../../css/t/tkniu6y8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><ellipse class="d2-cxqb-b"/><path class="i5ns3k62z"/><path class="q7ucmccqb"/><path class="tkniu6y8x"/></g>`,
		"fallback": "lucide-lab:hat-top",
	});
}

export default Component;
