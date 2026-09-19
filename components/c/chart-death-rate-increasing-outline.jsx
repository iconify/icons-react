import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z8fgq83jj.css';
import '../../css/p/ptgid_4ay.css';
import '../../css/m/m89qgbkka.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z8fgq83jj"/><path clip-rule="evenodd" class="ptgid_4ay"/><path class="m89qgbkka"/></g>`,
		"fallback": "healthicons:chart-death-rate-increasing-outline",
	});
}

export default Component;
