import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sm3k7bcms.css';
import '../../css/s/ss7_iyarj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sm3k7bcms"/><path class="ss7_iyarj"/></g>`,
		"fallback": "healthicons:ears-nose-and-throat2x-outline",
	});
}

export default Component;
