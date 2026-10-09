import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvggpac7z.css';
import '../../css/w/w45r9qedc.css';
import '../../css/o/ook3z_b8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvggpac7z"/><path class="w45r9qedc"/><path class="ook3z_b8u"/>`,
		"fallback": "energy-icons:house-battery-48",
	});
}

export default Component;
