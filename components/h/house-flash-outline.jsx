import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnn6g-38f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnn6g-38f"/>`,
		"fallback": "mdi:house-flash-outline",
	});
}

export default Component;
