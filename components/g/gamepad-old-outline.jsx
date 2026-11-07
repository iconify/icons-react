import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g83jubcwx.css';
import '../../css/p/plpx6bh0t.css';
import '../../css/b/bs59tnbwx.css';
import '../../css/f/fng6irbns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVG6WNJNcPe)" class="cuyn6tgcc"><path class="g83jubcwx"/><path class="plpx6bh0t"/><path clip-rule="evenodd" class="bs59tnbwx"/></g><defs><clipPath id="SVG6WNJNcPe"><rect class="fng6irbns"/></clipPath></defs></g>`,
		"fallback": "solar:gamepad-old-outline",
	});
}

export default Component;
