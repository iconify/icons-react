import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/t/tj_d2_jcu.css';
import '../../css/w/w8l_5lbsg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="tj_d2_jcu"/><path class="w8l_5lbsg"/></g>`,
		"fallback": "icon-park:feelgood-one",
	});
}

export default Component;
