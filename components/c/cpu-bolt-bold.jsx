import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qjm3ddcqe.css';
import '../../css/l/lxtu7lb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qjm3ddcqe"/><path class="lxtu7lb9s"/></g>`,
		"fallback": "solar:cpu-bolt-bold",
	});
}

export default Component;
