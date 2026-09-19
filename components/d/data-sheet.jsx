import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/p/p4anfmj7x.css';
import '../../css/i/ik9lmob6x.css';
import '../../css/z/zec3p4_0a.css';
import '../../css/t/tjx-cjtik.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="p4anfmj7x"/><path class="ik9lmob6x"/><path class="zec3p4_0a"/><path class="tjx-cjtik"/></g>`,
		"fallback": "icon-park:data-sheet",
	});
}

export default Component;
