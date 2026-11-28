import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m47zqrbmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m47zqrbmi primary"/>`,
		"fallback": "iconaut:arrow-big-right-duotone",
	});
}

export default Component;
