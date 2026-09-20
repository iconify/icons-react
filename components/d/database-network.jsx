import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbcqtl4ml.css';
import '../../css/f/f16pl8bxs.css';
import '../../css/t/txq_e2tvp.css';
import '../../css/d/dp4s2zb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rbcqtl4ml"/><path class="f16pl8bxs"/><path class="txq_e2tvp"/><path class="dp4s2zb9p"/></g>`,
		"fallback": "streamline-cyber-color:database-network",
	});
}

export default Component;
