import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xncha08gz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xncha08gz"/>`,
		"fallback": "hugeicons:gallery-thumbnails",
	});
}

export default Component;
