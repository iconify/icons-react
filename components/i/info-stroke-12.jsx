import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qepuaqbvx.css';
import '../../css/y/y7x7-ebdf.css';
import '../../css/s/sem3ivbpx.css';
import '../../css/f/fwoostyfw.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qepuaqbvx"><circle class="y7x7-ebdf"/><path class="sem3ivbpx"/></g><circle class="fwoostyfw"/>`,
		"fallback": "garden:info-stroke-12",
	});
}

export default Component;
