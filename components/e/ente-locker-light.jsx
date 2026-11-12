import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp1h2bbup.css';
import '../../css/d/d8smgqcqm.css';
import '../../css/k/k4ph6mujc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp1h2bbup"/><path class="d8smgqcqm"/><path class="k4ph6mujc"/>`,
		"fallback": "selfhst:ente-locker-light",
	});
}

export default Component;
