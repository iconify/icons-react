import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ner24ccnr.css';
import '../../css/k/k-h9or9ru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ner24ccnr"/><path class="k-h9or9ru"/></g>`,
		"fallback": "keyline-icons:circle-user-duotone",
	});
}

export default Component;
