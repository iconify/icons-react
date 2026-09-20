import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mnlqc0bvc.css';
import '../../css/w/wrwmc5bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mnlqc0bvc"/><path class="wrwmc5bfc"/></g>`,
		"fallback": "majesticons:color-swatch-line",
	});
}

export default Component;
