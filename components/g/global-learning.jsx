import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/ryvy1ofcz.css';
import '../../css/b/boqp1edht.css';
import '../../css/r/run4wxuax.css';
import '../../css/h/hb4kwibcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ryvy1ofcz"/><path class="boqp1edht"/><path class="run4wxuax"/><path class="hb4kwibcx"/></g>`,
		"fallback": "streamline-sharp:global-learning",
	});
}

export default Component;
