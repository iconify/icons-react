import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmo9ppb1i.css';
import '../../css/r/rwyjbx_4g.css';
import '../../css/e/ebolgtb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lmo9ppb1i"><path class="rwyjbx_4g"/><path class="ebolgtb4m"/></g>`,
		"fallback": "streamline-ultimate-color:diagram-up-double",
	});
}

export default Component;
