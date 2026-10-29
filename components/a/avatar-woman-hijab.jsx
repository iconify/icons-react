import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/virje-byd.css';
import '../../css/e/ekpjv0bpv.css';
import '../../css/q/qnf560gll.css';
import '../../css/f/fyuyard5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="virje-byd"/><path class="ekpjv0bpv"/><path class="qnf560gll"/><path class="fyuyard5d"/></g>`,
		"fallback": "withicons-bauhaus:avatar-woman-hijab",
	});
}

export default Component;
