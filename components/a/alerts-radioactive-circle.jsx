import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ehl97xb1v.css';
import '../../css/o/omsh5ac8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ehl97xb1v"/><path class="omsh5ac8t"/></g>`,
		"fallback": "streamline-freehand:alerts-radioactive-circle",
	});
}

export default Component;
