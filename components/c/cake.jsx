import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/bh_y89zfc.css';
import '../../css/a/ahudpqbba.css';
import '../../css/b/byxdlpbyc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="bh_y89zfc"/><path class="ahudpqbba"/><path class="byxdlpbyc"/></g>`,
		"fallback": "icon-park-solid:cake",
	});
}

export default Component;
