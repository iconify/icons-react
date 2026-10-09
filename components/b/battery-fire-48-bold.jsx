import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpjq1ubkk.css';
import '../../css/m/mbu6h6bik.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpjq1ubkk"/><path class="mbu6h6bik"/>`,
		"fallback": "energy-icons:battery-fire-48-bold",
	});
}

export default Component;
