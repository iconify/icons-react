import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot_iz2bwh.css';

const viewBox = {"width":704,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot_iz2bwh"/>`,
		"fallback": "brandico:box",
	});
}

export default Component;
