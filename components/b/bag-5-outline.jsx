import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/er6r_h69p.css';
import '../../css/c/clm_vbe7p.css';
import '../../css/m/mjjpj9b7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="er6r_h69p"/><path class="clm_vbe7p"/><path clip-rule="evenodd" class="mjjpj9b7j"/></g>`,
		"fallback": "solar:bag-5-outline",
	});
}

export default Component;
