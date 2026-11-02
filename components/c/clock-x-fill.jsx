import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovicm5b0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovicm5b0d"/>`,
		"fallback": "mingcute:clock-x-fill",
	});
}

export default Component;
