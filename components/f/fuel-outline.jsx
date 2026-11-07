import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dy5k0pncm.css';
import '../../css/e/eaf2wubvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dy5k0pncm"/><path class="eaf2wubvf"/></g>`,
		"fallback": "solar:fuel-outline",
	});
}

export default Component;
