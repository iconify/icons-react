import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g8qdoms0h.css';
import '../../css/l/lmmrxwb9j.css';
import '../../css/e/e1hj2ybxs.css';
import '../../css/k/kewqfdbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g8qdoms0h"/><path class="lmmrxwb9j"/><path class="e1hj2ybxs"/><path class="kewqfdbji"/></g>`,
		"fallback": "lucide-extended:folder-lock-duotone",
	});
}

export default Component;
