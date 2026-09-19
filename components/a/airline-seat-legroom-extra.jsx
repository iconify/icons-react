import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl_3d6bty.css';

const viewBox = {"width":448,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl_3d6bty"/>`,
		"fallback": "zmdi:airline-seat-legroom-extra",
	});
}

export default Component;
