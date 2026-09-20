import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xu2dgbhcl.css';
import '../../css/h/hqonbvb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xu2dgbhcl"/><path class="hqonbvb4m"/></g>`,
		"fallback": "tdesign:clear",
	});
}

export default Component;
