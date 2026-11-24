import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yismpnbbv.css';
import '../../css/s/sqh8rebfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yismpnbbv"/><path clip-rule="evenodd" class="sqh8rebfr"/>`,
		"fallback": "lucide-extended:bot-plus-filled",
	});
}

export default Component;
