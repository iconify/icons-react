import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3dte_aui.css';
import '../../css/p/p51mxvbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3dte_aui"/><path class="p51mxvbju"/>`,
		"fallback": "token:ctr",
	});
}

export default Component;
