import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmdm1lbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmdm1lbdc primary"/>`,
		"fallback": "iconaut:figma-duotone",
	});
}

export default Component;
