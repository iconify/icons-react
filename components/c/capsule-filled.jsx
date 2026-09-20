import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne9la_bfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne9la_bfq"/>`,
		"fallback": "tabler:capsule-filled",
	});
}

export default Component;
