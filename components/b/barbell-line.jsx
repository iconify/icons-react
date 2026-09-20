import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttw1ccb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttw1ccb9y"/>`,
		"fallback": "mingcute:barbell-line",
	});
}

export default Component;
