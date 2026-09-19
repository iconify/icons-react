import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/b08in11er.css';
import '../../css/l/lsjkxobus.css';
import '../../css/c/cxxb6hb3f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="b08in11er"/><path class="lsjkxobus"/><path class="cxxb6hb3f"/></g>`,
		"fallback": "icon-park:baseball",
	});
}

export default Component;
