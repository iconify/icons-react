import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsdwrm6cp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsdwrm6cp"/>`,
		"fallback": "iconamoon:close-circle-2-duotone",
	});
}

export default Component;
