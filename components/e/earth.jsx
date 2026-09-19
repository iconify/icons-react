import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/b08in11er.css';
import '../../css/c/cnmqsablm.css';
import '../../css/k/kl59wqhyt.css';
import '../../css/p/p-2hm0tdh.css';
import '../../css/r/rpexc0bxz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path clip-rule="evenodd" class="b08in11er"/><path class="cnmqsablm"/><path clip-rule="evenodd" class="kl59wqhyt"/><path class="p-2hm0tdh"/><path class="rpexc0bxz"/></g>`,
		"fallback": "icon-park:earth",
	});
}

export default Component;
