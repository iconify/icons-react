import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5sc_7bxe.css';
import '../../css/n/nxqakrb0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5sc_7bxe"/><path clip-rule="evenodd" class="nxqakrb0m"/>`,
		"fallback": "lucide-extended:gift-filled",
	});
}

export default Component;
