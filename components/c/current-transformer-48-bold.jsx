import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndt99pbau.css';
import '../../css/x/x908mum4i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndt99pbau"/><path class="x908mum4i"/>`,
		"fallback": "energy-icons:current-transformer-48-bold",
	});
}

export default Component;
