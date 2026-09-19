import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m45ig3bmy.css';
import '../../css/x/xjhwnvbgl.css';
import '../../css/y/yh5ahcbjw.css';
import '../../css/j/japg61bou.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m45ig3bmy"/><path class="xjhwnvbgl"/><path clip-rule="evenodd" class="yh5ahcbjw"/><path class="japg61bou"/></g>`,
		"fallback": "glyphs:apple-bold",
	});
}

export default Component;
