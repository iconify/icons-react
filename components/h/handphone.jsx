import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/u88azubze.css';
import '../../css/q/q1zow2bqk.css';
import '../../css/r/r124wd01y.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="u88azubze"/><path class="q1zow2bqk"/><path class="r124wd01y"/></g>`,
		"fallback": "marketeq:handphone",
	});
}

export default Component;
