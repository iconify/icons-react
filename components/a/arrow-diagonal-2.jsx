import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/sbcndhkhd.css';
import '../../css/x/xbkly43nv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="sbcndhkhd"/><path class="xbkly43nv"/></g>`,
		"fallback": "streamline-plump-color:arrow-diagonal-2",
	});
}

export default Component;
