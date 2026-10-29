import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qbf78s5yv.css';
import '../../css/i/iul0chb4j.css';
import '../../css/h/h51xg8b7m.css';
import '../../css/t/tgevrrbbx.css';
import '../../css/n/n9h-37zqt.css';
import '../../css/r/r186s1bzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="qbf78s5yv wm-shadow"/><path class="iul0chb4j"/><path class="h51xg8b7m"/><path class="tgevrrbbx"/><path class="n9h-37zqt wm-shine"/><path class="r186s1bzo wm-deco"/></g>`,
		"fallback": "withicons-sticker:cactus",
	});
}

export default Component;
