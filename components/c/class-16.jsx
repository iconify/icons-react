import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/phdx6-bmp.css';
import '../../css/d/d9zq3rwql.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="phdx6-bmp"/><path class="d9zq3rwql"/></g>`,
		"fallback": "nonicons:class-16",
	});
}

export default Component;
