import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo43we00a.css';
import '../../css/i/i2_s8xbof.css';
import '../../css/e/ezq00o19c.css';
import '../../css/r/rh80u5bmb.css';
import '../../css/q/q5mff9gyp.css';
import '../../css/w/wnbgvo_yd.css';
import '../../css/p/pqks7sbue.css';
import '../../css/c/c4946-17v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo43we00a"/><path class="i2_s8xbof"/><path class="ezq00o19c"/><path class="rh80u5bmb"/><path class="q5mff9gyp"/><path class="wnbgvo_yd"/><path class="pqks7sbue"/><path class="c4946-17v"/>`,
		"fallback": "solar:clipboard-list-bold-duotone",
	});
}

export default Component;
