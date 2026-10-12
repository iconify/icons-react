import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9eo20bcx.css';
import '../../css/v/vhffvzs3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9eo20bcx"/><path clip-rule="evenodd" class="vhffvzs3c"/>`,
		"fallback": "lucide-extended:badge-dollar-sign-filled",
	});
}

export default Component;
