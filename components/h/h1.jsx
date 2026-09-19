import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/m5ygchbhs.css';
import '../../css/b/bxzphvblp.css';
import '../../css/j/js2d54b3t.css';
import '../../css/g/gej8q_bqp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="m5ygchbhs"/><path class="bxzphvblp"/><path class="js2d54b3t"/><path class="gej8q_bqp"/></g>`,
		"fallback": "icon-park:h1",
	});
}

export default Component;
