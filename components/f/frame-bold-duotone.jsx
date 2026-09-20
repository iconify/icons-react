import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cfsf_3bkg.css';
import '../../css/k/klhcydbbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cfsf_3bkg"/><path class="klhcydbbm"/></g>`,
		"fallback": "solar:frame-bold-duotone",
	});
}

export default Component;
