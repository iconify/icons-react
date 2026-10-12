import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dodjpsu0u.css';
import '../../css/a/a3b73cb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dodjpsu0u"/><path class="a3b73cb9i"/>`,
		"fallback": "lucide-extended:flashlight-filled",
	});
}

export default Component;
