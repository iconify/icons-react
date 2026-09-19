import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls78t9bjb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls78t9bjb"/>`,
		"fallback": "famicons:funnel-sharp",
	});
}

export default Component;
