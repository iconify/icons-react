import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu7x4t4ss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu7x4t4ss"/>`,
		"fallback": "tabler:filter-discount",
	});
}

export default Component;
