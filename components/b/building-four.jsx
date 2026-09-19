import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/e/eckqqnj5s.css';
import '../../css/y/yn74iwb5y.css';
import '../../css/z/zxfq7sb8x.css';
import '../../css/s/simgxcb4x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path clip-rule="evenodd" class="eckqqnj5s"/><path class="yn74iwb5y"/><path class="zxfq7sb8x"/><path class="simgxcb4x"/></g>`,
		"fallback": "icon-park:building-four",
	});
}

export default Component;
