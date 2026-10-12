import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijvnqsbds.css';
import '../../css/t/t6y86k34x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ijvnqsbds"/><path class="t6y86k34x"/></g>`,
		"fallback": "lucide-extended:flag-triangle-right-duotone",
	});
}

export default Component;
