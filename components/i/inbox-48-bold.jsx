import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzc_knbku.css';
import '../../css/g/g-6zg3hle.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzc_knbku"/><path class="g-6zg3hle"/>`,
		"fallback": "energy-icons:inbox-48-bold",
	});
}

export default Component;
