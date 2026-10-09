import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcb49wu3o.css';
import '../../css/f/ftfqnvhwn.css';
import '../../css/l/lz4wfsojb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcb49wu3o"/><path class="ftfqnvhwn"/><path class="lz4wfsojb"/>`,
		"fallback": "energy-icons:crib-48-bold",
	});
}

export default Component;
