import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpo49bc6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpo49bc6p"/>`,
		"fallback": "boxicons:extension",
	});
}

export default Component;
