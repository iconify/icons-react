import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/g/gv6dagq1n.css';
import '../../css/u/ucpv59svk.css';
import '../../css/u/u13mrsbzy.css';
import '../../css/j/jdj1guqhy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="gv6dagq1n"/><path class="ucpv59svk"/><path class="u13mrsbzy"/><path class="jdj1guqhy"/></g>`,
		"fallback": "streamline-plump-color:announcement-megaphone",
	});
}

export default Component;
