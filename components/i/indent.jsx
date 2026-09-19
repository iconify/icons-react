import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ezyiklb8q.css';
import '../../css/p/pdi2u39jj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ezyiklb8q"/><path class="pdi2u39jj"/></g>`,
		"fallback": "bi:indent",
	});
}

export default Component;
