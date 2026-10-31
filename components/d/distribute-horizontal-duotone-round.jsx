import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9lwcdbld.css';
import '../../css/h/h9a4pqbei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b9lwcdbld"/><path class="h9a4pqbei"/></g>`,
		"fallback": "coolicons:distribute-horizontal-duotone-round",
	});
}

export default Component;
