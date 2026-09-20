import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qgagmabqs.css';
import '../../css/j/j_tj6dx6x.css';
import '../../css/r/r1i-drbtk.css';
import '../../css/x/xmx-thb_p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qgagmabqs"/><path class="j_tj6dx6x"/><path clip-rule="evenodd" class="r1i-drbtk"/><path clip-rule="evenodd" class="xmx-thb_p"/></g>`,
		"fallback": "streamline-kameleon-color:farm-duo",
	});
}

export default Component;
