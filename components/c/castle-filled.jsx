import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw-8xobrx.css';
import '../../css/o/ozytg_30r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uw-8xobrx"/><path class="ozytg_30r"/>`,
		"fallback": "lucide-extended:castle-filled",
	});
}

export default Component;
