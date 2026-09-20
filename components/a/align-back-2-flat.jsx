import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/srweuccjj.css';
import '../../css/s/sobfw_dqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="srweuccjj"/><path class="sobfw_dqx"/></g>`,
		"fallback": "streamline-sharp-color:align-back-2-flat",
	});
}

export default Component;
