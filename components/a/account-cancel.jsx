import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oun4-vbvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oun4-vbvq"/>`,
		"fallback": "mdi:account-cancel",
	});
}

export default Component;
