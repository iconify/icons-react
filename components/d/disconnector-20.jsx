import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cds5php0e.css';
import '../../css/w/w2rqhou5x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cds5php0e"/><path class="w2rqhou5x"/>`,
		"fallback": "energy-icons:disconnector-20",
	});
}

export default Component;
