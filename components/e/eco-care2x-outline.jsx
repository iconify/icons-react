import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jzrv52bhz.css';
import '../../css/u/uk2jb6qof.css';
import '../../css/f/fvmubtlcg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jzrv52bhz"/><path clip-rule="evenodd" class="uk2jb6qof"/><path class="fvmubtlcg"/></g>`,
		"fallback": "healthicons:eco-care2x-outline",
	});
}

export default Component;
