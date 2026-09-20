import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf6-lbcan.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf6-lbcan"/>`,
		"fallback": "ix:diagram-module-new",
	});
}

export default Component;
