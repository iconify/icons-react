import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6rtlmbtl.css';
import '../../css/n/n_5p_wbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6rtlmbtl"/><path class="n_5p_wbcu"/></g>`,
		"fallback": "lucide-extended:bone-fracture-duotone",
	});
}

export default Component;
