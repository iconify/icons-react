import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mjj-qhb8l.css';
import '../../css/t/t5o_7guan.css';
import '../../css/d/d_5cz8bal.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="mjj-qhb8l"/><path class="t5o_7guan"/><circle class="d_5cz8bal"/></g>`,
		"fallback": "icon-park:connect-address-one",
	});
}

export default Component;
