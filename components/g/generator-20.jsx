import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs6pf8bqr.css';
import '../../css/r/rtbfcmafp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs6pf8bqr"/><path class="rtbfcmafp"/>`,
		"fallback": "energy-icons:generator-20",
	});
}

export default Component;
