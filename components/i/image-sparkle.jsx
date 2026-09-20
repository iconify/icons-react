import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2663k7rl.css';
import '../../css/e/elvvetb9v.css';
import '../../css/x/x73ae8bnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x2663k7rl"/><rect class="elvvetb9v"/><path class="x73ae8bnb"/></g>`,
		"fallback": "reicon:image-sparkle",
	});
}

export default Component;
