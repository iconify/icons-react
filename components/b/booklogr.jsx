import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2bcowb-l.css';
import '../../css/i/i1sbddona.css';
import '../../css/b/bb7p9ybfb.css';
import '../../css/i/ioqkhfb3p.css';
import '../../css/g/g320chzxz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2bcowb-l"/><path class="i1sbddona"/><path class="bb7p9ybfb"/><path class="ioqkhfb3p"/><path class="g320chzxz"/>`,
		"fallback": "selfhst:booklogr",
	});
}

export default Component;
