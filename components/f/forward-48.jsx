import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw3xuy-8f.css';
import '../../css/l/ldri-y0et.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw3xuy-8f"/><path class="ldri-y0et"/>`,
		"fallback": "energy-icons:forward-48",
	});
}

export default Component;
