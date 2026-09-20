import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baw3zzbws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="baw3zzbws"/>`,
		"fallback": "mdi:firebase",
	});
}

export default Component;
