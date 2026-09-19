import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sf0cvsbpo.css';
import '../../css/c/c07pplisr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sf0cvsbpo"/><path clip-rule="evenodd" class="c07pplisr"/></g>`,
		"fallback": "gravity-ui:calendar-xmark",
	});
}

export default Component;
