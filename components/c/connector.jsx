import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0ffbkbbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0ffbkbbv"/>`,
		"fallback": "boxicons:connector",
	});
}

export default Component;
