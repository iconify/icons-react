import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/gkbbdf9be.css';
import '../../css/m/muj7y6sdn.css';
import '../../css/w/wqf1kfbdl.css';
import '../../css/x/x_u2r1m_y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="gkbbdf9be"/><path class="muj7y6sdn"/><path class="wqf1kfbdl"/><path class="x_u2r1m_y"/></g>`,
		"fallback": "icon-park:cycle-one",
	});
}

export default Component;
