import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nndsndbbo.css';
import '../../css/a/ay5e68biv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nndsndbbo"/><path class="ay5e68biv"/></g>`,
		"fallback": "si:ai-search-duotone",
	});
}

export default Component;
