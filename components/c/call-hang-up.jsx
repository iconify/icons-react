import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqax-6b-d.css';
import '../../css/n/nk5y3tbyy.css';
import '../../css/w/wq7blbcae.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jqax-6b-d"><path class="nk5y3tbyy"/><path class="wq7blbcae"/></g>`,
		"fallback": "streamline-plump:call-hang-up",
	});
}

export default Component;
