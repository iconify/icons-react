import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qd1nbn54s.css';
import '../../css/h/hewhy8b_g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="qd1nbn54s"/><path class="hewhy8b_g"/><line x1="6" x2="6" y1="13.5" y2="12.5"/><line x1="6" x2="6" y1="20" y2="19"/><line x1="6" x2="6" y1="7" y2="6"/><line x1="32" x2="32" y1="13.5" y2="12.5"/><line x1="32" x2="32" y1="20" y2="19"/><line x1="32" x2="32" y1="7" y2="6"/><line x1="32" x2="31" y1="20" y2="20"/><line x1="7" x2="6" y1="20" y2="20"/><line x1="7" x2="6" y1="6" y2="6"/><line x1="13" x2="12" y1="6" y2="6"/><line x1="19.5" x2="18.5" y1="6" y2="6"/><line x1="19.5" x2="18.5" y1="20" y2="20"/><line x1="26" x2="25" y1="6" y2="6"/><line x1="13" x2="12" y1="20" y2="20"/><line x1="26" x2="25" y1="20" y2="20"/><line x1="32" x2="31" y1="6" y2="6"/></g>`,
		"fallback": "icon-park:add-subset",
	});
}

export default Component;
