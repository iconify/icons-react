import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lf0ebd6gd.css';
import '../../css/x/xvzpi5ble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lf0ebd6gd"/><path class="xvzpi5ble"/></g>`,
		"fallback": "streamline-sharp:global-learning-solid",
	});
}

export default Component;
