import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n4awvr3zz.css';
import '../../css/b/b6vzku72j.css';
import '../../css/i/i2_1hbjoh.css';
import '../../css/w/wktpslbno.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n4awvr3zz"/><path class="b6vzku72j"/><path clip-rule="evenodd" class="i2_1hbjoh"/><path class="wktpslbno"/></g>`,
		"fallback": "healthicons:community-healthworker2x-outline",
	});
}

export default Component;
