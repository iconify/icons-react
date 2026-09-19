import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tgx-x8bou.css';
import '../../css/b/bent-3bsb.css';
import '../../css/e/efo5bjbca.css';
import '../../css/h/ha_idlbah.css';
import '../../css/s/s4dj2cx9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tgx-x8bou"/><path class="bent-3bsb"/><path class="efo5bjbca"/><path class="ha_idlbah"/><path class="s4dj2cx9k"/></g>`,
		"fallback": "hugeicons:electric-tower-01",
	});
}

export default Component;
