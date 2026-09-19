import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fqgjk-b4m.css';
import '../../css/o/oh3h2lnrv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fqgjk-b4m"/><path clip-rule="evenodd" class="oh3h2lnrv"/></g>`,
		"fallback": "healthicons:animal-pig-outline",
	});
}

export default Component;
