import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b68x9qh8q.css';
import '../../css/w/w80_ihp8f.css';
import '../../css/k/k7gdhlbmx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b68x9qh8q"/><path class="w80_ihp8f"/><path class="k7gdhlbmx"/>`,
		"fallback": "energy-icons:grid-network-20-bold",
	});
}

export default Component;
