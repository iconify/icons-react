import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xvqsep9jn.css';
import '../../css/c/cniu3mb0r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xvqsep9jn"/><path class="cniu3mb0r"/></g>`,
		"fallback": "pepicons-pencil:credit-card",
	});
}

export default Component;
