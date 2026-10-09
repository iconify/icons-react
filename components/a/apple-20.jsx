import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmsryhb8r.css';
import '../../css/r/rmujqn65w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmsryhb8r"/><path class="rmujqn65w"/>`,
		"fallback": "energy-icons:apple-20",
	});
}

export default Component;
