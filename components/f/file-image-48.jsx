import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dezwopb-j.css';
import '../../css/n/nc33dtbgh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dezwopb-j"/><path class="nc33dtbgh"/>`,
		"fallback": "energy-icons:file-image-48",
	});
}

export default Component;
