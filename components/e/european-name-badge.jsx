import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo0ulr8we.css';
import '../../css/f/f545x0rdr.css';
import '../../css/r/ruzuxjgff.css';
import '../../css/e/epc4scphz.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/g/gm1yvzrmo.css';
import '../../css/m/mrxt1pbyq.css';
import '../../css/l/lfow6pbck.css';
import '../../css/g/g0cq5hb0u.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="xo0ulr8we"/><rect class="f545x0rdr"/><path class="ruzuxjgff"/><rect class="epc4scphz"/><g class="brzn_0bpr"><path class="gm1yvzrmo"/><rect class="mrxt1pbyq"/><path class="lfow6pbck"/><rect class="g0cq5hb0u"/></g>`,
		"fallback": "openmoji:european-name-badge",
	});
}

export default Component;
