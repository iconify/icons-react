import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fzk77ej0s.css';
import '../../css/t/t3tvcp-sa.css';
import '../../css/o/ontm3cbur.css';
import '../../css/r/rj2mcbcyu.css';
import '../../css/g/gywi0nb9g.css';
import '../../css/i/ir5gggqga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fzk77ej0s"/><path class="t3tvcp-sa"/><path class="ontm3cbur"/><path class="rj2mcbcyu"/><path class="gywi0nb9g"/><path class="ir5gggqga"/></g>`,
		"fallback": "streamline-cyber-color:atom-1",
	});
}

export default Component;
