import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/y3c9r13lv.css';
import '../../css/d/dj9a_iuns.css';
import '../../css/u/uu1b7vbex.css';
import '../../css/u/uh01hzbyb.css';
import '../../css/r/rc2ns209c.css';
import '../../css/k/kkasn-b5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="y3c9r13lv"/><path class="dj9a_iuns"/><path class="uu1b7vbex wm-shine"/><path class="uh01hzbyb"/><path class="rc2ns209c"/><path class="kkasn-b5y"/></g>`,
		"fallback": "withicons-kawaii:heart",
	});
}

export default Component;
