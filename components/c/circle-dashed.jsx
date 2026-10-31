import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pp5w1i_pr.css';
import '../../css/o/o_btd8brc.css';
import '../../css/g/gtl2labxc.css';
import '../../css/e/eth_0gbvr.css';
import '../../css/f/f0wjb5bov.css';
import '../../css/p/p-dp73bki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pp5w1i_pr wm-shadow"/><path class="o_btd8brc wm-k"/><path class="gtl2labxc wm-k"/><path class="eth_0gbvr wm-k"/><path class="f0wjb5bov wm-k"/><path class="p-dp73bki wm-shine"/></g>`,
		"fallback": "withicons-coquette:circle-dashed",
	});
}

export default Component;
