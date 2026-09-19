import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/m/m9phv6bok.css';
import '../../css/x/xm-kbrsxz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="m9phv6bok"/><path class="xm-kbrsxz"/></g>`,
		"fallback": "icon-park-outline:bullet-map",
	});
}

export default Component;
