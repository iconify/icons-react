import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtoeaq1vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtoeaq1vc"/>`,
		"fallback": "mingcute:delete-2-fill",
	});
}

export default Component;
