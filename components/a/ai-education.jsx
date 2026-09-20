import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y19tb2bje.css';
import '../../css/g/g_1yj6bdr.css';
import '../../css/b/br87t9bzc.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y19tb2bje"/><path class="g_1yj6bdr"/><path class="br87t9bzc"/></g>`,
		"fallback": "tdesign:ai-education",
	});
}

export default Component;
