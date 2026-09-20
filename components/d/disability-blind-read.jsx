import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m4i-8bcfn.css';
import '../../css/k/k26aj82vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m4i-8bcfn"/><path class="k26aj82vc"/></g>`,
		"fallback": "streamline-freehand:disability-blind-read",
	});
}

export default Component;
