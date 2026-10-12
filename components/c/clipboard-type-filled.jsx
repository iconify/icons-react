import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcp8k2ckv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vcp8k2ckv"/>`,
		"fallback": "lucide-extended:clipboard-type-filled",
	});
}

export default Component;
