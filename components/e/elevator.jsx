import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykqei9bjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykqei9bjf"/>`,
		"fallback": "mdi:elevator",
	});
}

export default Component;
