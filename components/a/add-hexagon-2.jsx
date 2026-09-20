import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncq44p-wx.css';
import '../../css/e/efm26jbnu.css';
import '../../css/s/shikrac9m.css';
import '../../css/a/a0hdqrbyg.css';
import '../../css/q/q_k-yi4to.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ncq44p-wx"/><path class="efm26jbnu"/><path class="shikrac9m"/><path class="a0hdqrbyg"/><path class="q_k-yi4to"/></g>`,
		"fallback": "streamline-cyber-color:add-hexagon-2",
	});
}

export default Component;
