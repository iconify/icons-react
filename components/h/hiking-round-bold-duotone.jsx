import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxi8hkb5i.css';
import '../../css/l/lw72yprve.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/r/r3qvqygmn.css';
import '../../css/z/zt-41go0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxi8hkb5i"/><path clip-rule="evenodd" class="lw72yprve"/><g class="xtpeb-edw"><path class="r3qvqygmn"/><path class="zt-41go0y"/></g>`,
		"fallback": "solar:hiking-round-bold-duotone",
	});
}

export default Component;
