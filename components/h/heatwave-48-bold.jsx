import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz-knsbvd.css';
import '../../css/l/lj7gdpblt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz-knsbvd"/><path class="lj7gdpblt"/>`,
		"fallback": "energy-icons:heatwave-48-bold",
	});
}

export default Component;
