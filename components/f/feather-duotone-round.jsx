import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bk7g11b-o.css';
import '../../css/c/c3tl3cc2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bk7g11b-o"/><path class="c3tl3cc2c"/></g>`,
		"fallback": "coolicons:feather-duotone-round",
	});
}

export default Component;
