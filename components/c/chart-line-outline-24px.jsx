import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sx571qbiw.css';
import '../../css/w/w9qq0ybth.css';
import '../../css/g/gfvbhrbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sx571qbiw"/><path clip-rule="evenodd" class="w9qq0ybth"/><path clip-rule="evenodd" class="gfvbhrbka"/></g>`,
		"fallback": "healthicons:chart-line-outline-24px",
	});
}

export default Component;
