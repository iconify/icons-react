import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svn20mxkr.css';
import '../../css/l/l-f6ssbaf.css';
import '../../css/r/ra1t7sbvx.css';
import '../../css/q/qam-_kbnn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svn20mxkr"/><path class="l-f6ssbaf"/><path class="ra1t7sbvx"/><path class="qam-_kbnn"/>`,
		"fallback": "energy-icons:cottage-48-bold",
	});
}

export default Component;
