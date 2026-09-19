import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/thwnq55uu.css';
import '../../css/g/gx1d65edx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="thwnq55uu"/><path class="gx1d65edx"/></g>`,
		"fallback": "heroicons:chevron-double-right-solid",
	});
}

export default Component;
