import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tdz9v5bjp.css';
import '../../css/p/psr97mb_s.css';
import '../../css/p/pcg7sbb1l.css';
import '../../css/w/wlb0b7siw.css';
import '../../css/g/g8n191bla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="tdz9v5bjp"/><path class="psr97mb_s wm-shine"/><path class="pcg7sbb1l wm-k"/><path class="wlb0b7siw wm-a"/><path class="g8n191bla wm-deco"/></g>`,
		"fallback": "withicons-kawaii:crayon",
	});
}

export default Component;
