import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imlgop09i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imlgop09i"/>`,
		"fallback": "mingcute:folder-warning-line",
	});
}

export default Component;
