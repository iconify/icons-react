import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slquxucew.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slquxucew"/>`,
		"fallback": "streamline:call-center-support-service",
	});
}

export default Component;
