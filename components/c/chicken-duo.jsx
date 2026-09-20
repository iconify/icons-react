import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ov163mcoa.css';
import '../../css/g/gahdxs2gi.css';
import '../../css/m/mhqzdwy8n.css';
import '../../css/g/gufdfu0ag.css';
import '../../css/s/sop3yxbru.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ov163mcoa"/><path class="gahdxs2gi"/><path class="mhqzdwy8n"/><path class="gufdfu0ag"/><path clip-rule="evenodd" class="sop3yxbru"/></g>`,
		"fallback": "streamline-kameleon-color:chicken-duo",
	});
}

export default Component;
