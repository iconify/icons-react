import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tj9yr5thn.css';
import '../../css/s/s154r28op.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tj9yr5thn"/><path class="s154r28op"/></g>`,
		"fallback": "lucide-extended:file-stack-duotone",
	});
}

export default Component;
