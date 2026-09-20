import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvnprs7bd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvnprs7bd"/>`,
		"fallback": "streamline-flex:inbox-tray-1",
	});
}

export default Component;
