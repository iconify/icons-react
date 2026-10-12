import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7ter5dcd.css';
import '../../css/l/ly4csrbrb.css';
import '../../css/k/kdpj9eb0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m7ter5dcd"/><path class="ly4csrbrb"/><path class="kdpj9eb0k"/></g>`,
		"fallback": "lucide-extended:airplay-duotone",
	});
}

export default Component;
