import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dgr_-3hoc.css';
import '../../css/t/tj4uxztpt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dgr_-3hoc"/><path class="tj4uxztpt"/></g>`,
		"fallback": "streamline-flex:bill-4-solid",
	});
}

export default Component;
