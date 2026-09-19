import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/ogt7h3bjy.css';
import '../../css/e/eu2jph4ne.css';
import '../../css/y/ys0g5f80g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ogt7h3bjy"/><path class="eu2jph4ne"/><path class="ys0g5f80g"/></g>`,
		"fallback": "hugeicons:droplets",
	});
}

export default Component;
