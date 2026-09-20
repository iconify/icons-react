import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hinaxjb7n.css';
import '../../css/n/nrj-m7iev.css';
import '../../css/e/evjx-6l9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hinaxjb7n"/><path class="nrj-m7iev"/><path class="evjx-6l9m"/></g>`,
		"fallback": "reicon:circle-arrows-left-duotone",
	});
}

export default Component;
