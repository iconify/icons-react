import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/p/p61l_ha_m.css';
import '../../css/v/vwpgn7b7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="p61l_ha_m"/><path class="vwpgn7b7m"/></g>`,
		"fallback": "streamline-cyber:hand-tablet-icons-2",
	});
}

export default Component;
