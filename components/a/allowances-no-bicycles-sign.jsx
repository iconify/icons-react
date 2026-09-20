import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yz39ln45e.css';
import '../../css/h/h9d5tsxid.css';
import '../../css/z/zomz06otq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yz39ln45e"/><path class="h9d5tsxid"/><path class="zomz06otq"/></g>`,
		"fallback": "streamline-freehand:allowances-no-bicycles-sign",
	});
}

export default Component;
