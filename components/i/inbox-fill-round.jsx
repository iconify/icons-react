import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb8xb_bsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb8xb_bsx"/>`,
		"fallback": "coolicons:inbox-fill-round",
	});
}

export default Component;
