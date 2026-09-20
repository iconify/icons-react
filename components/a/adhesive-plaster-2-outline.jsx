import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hm3726f7n.css';
import '../../css/f/fekzoofij.css';
import '../../css/a/atr7labfl.css';
import '../../css/m/mtaxqxbsg.css';
import '../../css/e/eqyapregi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hm3726f7n"/><path class="fekzoofij"/><path class="atr7labfl"/><path class="mtaxqxbsg"/><path clip-rule="evenodd" class="eqyapregi"/></g>`,
		"fallback": "solar:adhesive-plaster-2-outline",
	});
}

export default Component;
