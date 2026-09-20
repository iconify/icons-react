import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w_atezbie.css';
import '../../css/g/gnxld92_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w_atezbie"/><path class="gnxld92_h"/></g>`,
		"fallback": "reicon:bulb-bolt-duotone",
	});
}

export default Component;
