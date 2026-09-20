import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grmcd7z2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grmcd7z2z"/>`,
		"fallback": "mingcute:add-circle-line",
	});
}

export default Component;
