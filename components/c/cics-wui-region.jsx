import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i--l_kmzs.css';
import '../../css/j/jfuk8ubuj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i--l_kmzs"/><path class="jfuk8ubuj"/>`,
		"fallback": "carbon:cics-wui-region",
	});
}

export default Component;
