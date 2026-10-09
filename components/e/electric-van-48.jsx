import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9yioib4q.css';
import '../../css/f/ffopgc0dq.css';
import '../../css/p/pe6rmrbpe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9yioib4q"/><path class="ffopgc0dq"/><path class="pe6rmrbpe"/>`,
		"fallback": "energy-icons:electric-van-48",
	});
}

export default Component;
