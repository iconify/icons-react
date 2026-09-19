import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/v/v-8u4ibpv.css';
import '../../css/k/kpeyjbcps.css';
import '../../css/y/y40rqnbbe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="v-8u4ibpv"/><path class="kpeyjbcps"/><path class="y40rqnbbe"/></g>`,
		"fallback": "icon-park-outline:horse-zodiac",
	});
}

export default Component;
