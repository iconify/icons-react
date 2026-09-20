import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpeo57y3g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpeo57y3g"/>`,
		"fallback": "la:bitcoin",
	});
}

export default Component;
