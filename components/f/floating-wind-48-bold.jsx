import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7qdlcbcy.css';
import '../../css/k/kynfjw24x.css';
import '../../css/t/tew95inet.css';
import '../../css/d/d26csiiuk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7qdlcbcy"/><path class="kynfjw24x"/><path class="tew95inet"/><path class="d26csiiuk"/>`,
		"fallback": "energy-icons:floating-wind-48-bold",
	});
}

export default Component;
