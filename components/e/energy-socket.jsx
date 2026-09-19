import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/b08in11er.css';
import '../../css/v/v-h3_9bul.css';
import '../../css/e/e_f7_4bqj.css';
import '../../css/n/ncfsb48ka.css';
import '../../css/i/iaiylo83l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="b08in11er"/><path class="v-h3_9bul"/><path class="e_f7_4bqj"/><path class="ncfsb48ka"/><path class="iaiylo83l"/></g>`,
		"fallback": "icon-park:energy-socket",
	});
}

export default Component;
