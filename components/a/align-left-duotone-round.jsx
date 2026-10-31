import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fdtj7lfgs.css';
import '../../css/b/b9dflnb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fdtj7lfgs"/><path class="b9dflnb9w"/></g>`,
		"fallback": "coolicons:align-left-duotone-round",
	});
}

export default Component;
