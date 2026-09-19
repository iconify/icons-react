import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fme87mb9p.css';
import '../../css/t/tjj8vhbjm.css';
import '../../css/v/vli0febuy.css';
import '../../css/x/xkx9-_bcv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fme87mb9p"/><path clip-rule="evenodd" class="tjj8vhbjm"/><path class="vli0febuy"/><path class="xkx9-_bcv"/></g>`,
		"fallback": "healthicons:2g2x-outline",
	});
}

export default Component;
