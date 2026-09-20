import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovt-8nb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovt-8nb0u"/>`,
		"fallback": "tabler:bus-filled",
	});
}

export default Component;
