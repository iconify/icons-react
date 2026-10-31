import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l3xgu4b8f.css';
import '../../css/u/urx1dyvef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l3xgu4b8f"/><path class="urx1dyvef"/></g>`,
		"fallback": "coolicons:align-bottom-duotone-round",
	});
}

export default Component;
