import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny01ndbld.css';
import '../../css/q/q1m6kzbir.css';
import '../../css/m/mfb-umueb.css';
import '../../css/u/uvbrxut2r.css';
import '../../css/i/iocexdb6q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny01ndbld"/><g class="q1m6kzbir"><path class="mfb-umueb"/><path class="uvbrxut2r"/></g><path class="iocexdb6q"/>`,
		"fallback": "flat-color-icons:icons8-cup",
	});
}

export default Component;
