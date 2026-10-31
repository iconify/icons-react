import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lk1166vkd.css';
import '../../css/d/dzq5r_fhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lk1166vkd"/><path class="dzq5r_fhp"/></g>`,
		"fallback": "coolicons:cable-duotone-round",
	});
}

export default Component;
