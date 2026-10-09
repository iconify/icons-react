import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kccn7xs5a.css';
import '../../css/f/fbsv3bchb.css';
import '../../css/k/k0x9cnbfj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kccn7xs5a"/><path class="fbsv3bchb"/><path class="k0x9cnbfj"/>`,
		"fallback": "energy-icons:ferris-wheel-48-bold",
	});
}

export default Component;
