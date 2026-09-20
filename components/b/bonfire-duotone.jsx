import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g2x6p3blx.css';
import '../../css/x/xhp0n3kyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g2x6p3blx"/><path class="xhp0n3kyc"/></g>`,
		"fallback": "reicon:bonfire-duotone",
	});
}

export default Component;
