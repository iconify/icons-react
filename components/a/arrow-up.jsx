import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebldvkbho.css';
import '../../css/x/xeuuo9m-q.css';
import '../../css/k/kpczoccur.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebldvkbho"/><path class="xeuuo9m-q"/><path class="kpczoccur"/>`,
		"fallback": "ei:arrow-up",
	});
}

export default Component;
