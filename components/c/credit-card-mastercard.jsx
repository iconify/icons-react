import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gkqj_qbpd.css';
import '../../css/n/nlix9lbxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gkqj_qbpd"/><path class="nlix9lbxj"/></g>`,
		"fallback": "streamline-freehand:credit-card-mastercard",
	});
}

export default Component;
