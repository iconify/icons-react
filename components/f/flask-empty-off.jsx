import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3dxn9xfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3dxn9xfq"/>`,
		"fallback": "mdi:flask-empty-off",
	});
}

export default Component;
