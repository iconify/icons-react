import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/loji95m6e.css';
import '../../css/e/ed5_y302y.css';
import '../../css/f/fw_40y71x.css';
import '../../css/e/em5bsmbgk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="loji95m6e"/><path class="ed5_y302y"/><path class="fw_40y71x"/><path class="em5bsmbgk"/></g>`,
		"fallback": "icon-park-solid:broadcast-one",
	});
}

export default Component;
