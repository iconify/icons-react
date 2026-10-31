import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6ftoet_c.css';
import '../../css/w/wgsxw9bbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b6ftoet_c"/><path class="wgsxw9bbd"/></g>`,
		"fallback": "coolicons:figma-duotone-round",
	});
}

export default Component;
