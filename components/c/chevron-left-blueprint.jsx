import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sju0gac4t.css';
import '../../css/y/y1yeo1vat.css';
import '../../css/p/pouqntl0a.css';
import '../../css/q/q7mpc-b8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="sju0gac4t wm-deco"/><path class="wm-deco y1yeo1vat"/><path class="pouqntl0a"/><path class="q7mpc-b8b"/></g>`,
		"fallback": "withicons:chevron-left-blueprint",
	});
}

export default Component;
