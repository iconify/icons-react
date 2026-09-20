import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu7wcxhpc.css';
import '../../css/q/q7cfilbkd.css';
import '../../css/y/ymqozubcz.css';
import '../../css/b/bvmpmfbtm.css';
import '../../css/g/g_hn3zuqp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouiIcon__fillSecondary yu7wcxhpc"/><path class="q7cfilbkd"/><path class="ouiIcon__fillSecondary ymqozubcz"/><path class="bvmpmfbtm"/><path class="g_hn3zuqp"/>`,
		"fallback": "oui:app-search-profiler",
	});
}

export default Component;
