import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5jstv2qp.css';
import '../../css/u/uvian2ben.css';
import '../../css/p/p5n1y4wab.css';
import '../../css/h/hvka4mbsp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5jstv2qp"/><path class="uvian2ben"/><path class="p5n1y4wab"/><path class="hvka4mbsp"/>`,
		"fallback": "ion:connection-bars",
	});
}

export default Component;
