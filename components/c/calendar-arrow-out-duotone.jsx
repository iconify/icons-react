import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b-gd9ibem.css';
import '../../css/r/rnrnfqbcg.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b-gd9ibem"/><path class="rnrnfqbcg"/></g>`,
		"fallback": "pullo:calendar-arrow-out-duotone",
	});
}

export default Component;
