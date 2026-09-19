import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kel2ck8xd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kel2ck8xd"/>`,
		"fallback": "basil:chart-pie-outline",
	});
}

export default Component;
