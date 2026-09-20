import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxvb0bbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxvb0bbjv"/>`,
		"fallback": "tabler:cloud-pin",
	});
}

export default Component;
