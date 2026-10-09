import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvggpac7z.css';
import '../../css/r/rj7hwkb9z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvggpac7z"/><path class="rj7hwkb9z"/>`,
		"fallback": "energy-icons:house-sun-48",
	});
}

export default Component;
