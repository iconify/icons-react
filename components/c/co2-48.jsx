import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9itrbcfs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9itrbcfs"/>`,
		"fallback": "energy-icons:co2-48",
	});
}

export default Component;
