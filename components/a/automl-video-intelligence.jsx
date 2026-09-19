import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swfbeuwtc.css';
import '../../css/j/j1h9y0ztu.css';
import '../../css/p/p4i-mj4jw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swfbeuwtc"/><path class="j1h9y0ztu"/><path class="p4i-mj4jw"/>`,
		"fallback": "gcp:automl-video-intelligence",
	});
}

export default Component;
