import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qghi1b7fi.css';
import '../../css/t/t4n1jkvms.css';
import '../../css/m/mja2l3bko.css';
import '../../css/q/qz2_6rb3h.css';
import '../../css/d/d0194gtek.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qghi1b7fi"/><path class="t4n1jkvms"/><path class="mja2l3bko"/><path class="qz2_6rb3h"/><path class="d0194gtek"/>`,
		"fallback": "fxemoji:chicken",
	});
}

export default Component;
