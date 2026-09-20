import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/welw-j_uy.css';
import '../../css/d/d32dbmshs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="welw-j_uy"/><path class="d32dbmshs"/></g>`,
		"fallback": "streamline:credit-card-2-solid",
	});
}

export default Component;
