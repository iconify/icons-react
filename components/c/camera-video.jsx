import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/b/bhdfqnbsu.css';
import '../../css/k/k783hdbat.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="bhdfqnbsu"/><path class="k783hdbat"/></g>`,
		"fallback": "streamline-plump:camera-video",
	});
}

export default Component;
