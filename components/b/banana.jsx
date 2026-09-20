import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n4jvdkgos.css';
import '../../css/w/w1iwq6d3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n4jvdkgos"/><path class="w1iwq6d3u"/></g>`,
		"fallback": "lucide:banana",
	});
}

export default Component;
