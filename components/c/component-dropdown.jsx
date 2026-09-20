import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g3-8t3b9n.css';
import '../../css/s/s5f1hfbes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g3-8t3b9n"/><path class="s5f1hfbes"/></g>`,
		"fallback": "tdesign:component-dropdown",
	});
}

export default Component;
