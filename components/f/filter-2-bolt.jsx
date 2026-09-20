import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4r0djrmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4r0djrmn"/>`,
		"fallback": "tabler:filter-2-bolt",
	});
}

export default Component;
