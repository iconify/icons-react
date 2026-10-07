import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bv9v4xlge.css';
import '../../css/j/jb730ab3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bv9v4xlge"/><path class="jb730ab3d"/></g>`,
		"fallback": "wordpress:heading-level-1",
	});
}

export default Component;
