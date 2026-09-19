import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zl_c1zqrx.css';
import '../../css/u/unud4-b6i.css';
import '../../css/u/uha_3w82g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zl_c1zqrx"/><path class="unud4-b6i"/><path class="uha_3w82g"/></g>`,
		"fallback": "pepicons:building",
	});
}

export default Component;
