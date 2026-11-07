import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxi8hkb5i.css';
import '../../css/u/uu0gpbbvf.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/y/ynv6fkb2h.css';
import '../../css/f/fd9mfdh9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxi8hkb5i"/><path clip-rule="evenodd" class="uu0gpbbvf"/><g class="xtpeb-edw"><path class="ynv6fkb2h"/><path class="fd9mfdh9e"/></g>`,
		"fallback": "solar:hiking-bold-duotone",
	});
}

export default Component;
