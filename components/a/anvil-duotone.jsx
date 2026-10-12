import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8_bz1tvo.css';
import '../../css/n/ntlkebpcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w8_bz1tvo"/><path class="ntlkebpcs"/></g>`,
		"fallback": "lucide-extended:anvil-duotone",
	});
}

export default Component;
