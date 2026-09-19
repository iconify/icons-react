import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r00m7gbsq.css';
import '../../css/x/xh-v6_tnt.css';
import '../../css/v/v-b1xabbp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="r00m7gbsq"/><rect class="xh-v6_tnt"/><path class="v-b1xabbp"/></g>`,
		"fallback": "icon-park:folder-lock-one",
	});
}

export default Component;
