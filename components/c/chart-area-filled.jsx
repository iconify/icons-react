import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4_2h8_8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4_2h8_8k"/>`,
		"fallback": "tabler:chart-area-filled",
	});
}

export default Component;
