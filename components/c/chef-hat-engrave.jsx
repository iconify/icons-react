import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hlqfty9am.css';
import '../../css/q/q1zsas24y.css';
import '../../css/b/b4x7prkcu.css';
import '../../css/t/te682eb5s.css';
import '../../css/y/yqkivob1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hlqfty9am wm-k"/><path class="q1zsas24y wm-a"/><path class="b4x7prkcu wm-shadow"/><path class="te682eb5s wm-k"/><path class="wm-a yqkivob1m"/></g>`,
		"fallback": "withicons:chef-hat-engrave",
	});
}

export default Component;
