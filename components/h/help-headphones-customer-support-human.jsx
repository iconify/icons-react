import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n0y6j6byu.css';
import '../../css/f/fiyr8cb9q.css';
import '../../css/y/yimcpzbjq.css';
import '../../css/k/k2a0vobbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n0y6j6byu"/><path class="fiyr8cb9q"/><path class="yimcpzbjq"/><path class="k2a0vobbs"/></g>`,
		"fallback": "streamline-freehand-color:help-headphones-customer-support-human",
	});
}

export default Component;
