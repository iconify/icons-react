import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajmr6ilnu.css';
import '../../css/r/r2w_weexo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ajmr6ilnu"/><path class="r2w_weexo"/></g>`,
		"fallback": "coolicons:bank-duotone-round",
	});
}

export default Component;
