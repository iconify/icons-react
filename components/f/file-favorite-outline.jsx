import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xay830bso.css';
import '../../css/u/ugl4i4nij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xay830bso"/><path class="ugl4i4nij"/></g>`,
		"fallback": "solar:file-favorite-outline",
	});
}

export default Component;
