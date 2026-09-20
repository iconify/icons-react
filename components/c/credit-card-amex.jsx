import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gtyo9db-c.css';
import '../../css/j/j79o88b0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gtyo9db-c"/><path class="j79o88b0y"/></g>`,
		"fallback": "streamline-freehand:credit-card-amex",
	});
}

export default Component;
