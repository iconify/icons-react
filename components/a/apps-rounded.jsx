import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_r2f60rh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_r2f60rh"/>`,
		"fallback": "grommet-icons:apps-rounded",
	});
}

export default Component;
