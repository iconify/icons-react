import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd3uhsi3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd3uhsi3s"/>`,
		"fallback": "gridicons:ink",
	});
}

export default Component;
