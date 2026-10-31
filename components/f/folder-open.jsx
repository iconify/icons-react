import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lzylc9sbx.css';
import '../../css/t/tbe0i4byx.css';
import '../../css/x/x2r35c5di.css';
import '../../css/j/jc7jrfgwn.css';
import '../../css/t/tc8hdqbuk.css';
import '../../css/y/ypz1tpn5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="lzylc9sbx wm-shadow"/><path class="tbe0i4byx"/><path class="x2r35c5di"/><path class="jc7jrfgwn"/><path class="tc8hdqbuk"/><path class="ypz1tpn5x"/></g>`,
		"fallback": "withicons-retro:folder-open",
	});
}

export default Component;
