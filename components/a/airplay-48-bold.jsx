import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psdyb3bve.css';
import '../../css/n/neg1e0pbo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psdyb3bve"/><path class="neg1e0pbo"/>`,
		"fallback": "energy-icons:airplay-48-bold",
	});
}

export default Component;
