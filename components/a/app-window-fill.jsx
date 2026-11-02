import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzn2sjbas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzn2sjbas"/>`,
		"fallback": "mingcute:app-window-fill",
	});
}

export default Component;
