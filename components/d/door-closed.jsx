import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rszqa-p5t.css';
import '../../css/n/n8-3fdb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rszqa-p5t"/><path class="n8-3fdb7j"/>`,
		"fallback": "pixel:door-closed",
	});
}

export default Component;
