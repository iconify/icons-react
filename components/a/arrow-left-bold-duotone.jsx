import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcsvflbhf.css';
import '../../css/x/xx2uvzv_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vcsvflbhf"/><path class="xx2uvzv_q"/>`,
		"fallback": "solar:arrow-left-bold-duotone",
	});
}

export default Component;
