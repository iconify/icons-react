import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pdo8y5idu.css';
import '../../css/y/yfiw6trca.css';
import '../../css/v/v94np1bbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pdo8y5idu"/><path class="yfiw6trca"/><path clip-rule="evenodd" class="v94np1bbz"/></g>`,
		"fallback": "reicon:ferris-wheel-duotone",
	});
}

export default Component;
