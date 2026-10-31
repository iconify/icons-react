import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n19xo3b9b.css';
import '../../css/n/nfjk49b3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n19xo3b9b"/><path class="nfjk49b3h"/></g>`,
		"fallback": "coolicons:font-duotone-round",
	});
}

export default Component;
