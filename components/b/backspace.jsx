import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nmmtdvb7f.css';
import '../../css/o/ojt-4acqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nmmtdvb7f"/><path clip-rule="evenodd" class="ojt-4acqb"/></g>`,
		"fallback": "mono-icons:backspace",
	});
}

export default Component;
