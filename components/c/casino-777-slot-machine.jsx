import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nq7qkabjs.css';
import '../../css/d/de7-fmxhe.css';
import '../../css/u/uwvxd-bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nq7qkabjs"/><path class="de7-fmxhe"/><path class="uwvxd-bfn"/></g>`,
		"fallback": "streamline-freehand-color:casino-777-slot-machine",
	});
}

export default Component;
