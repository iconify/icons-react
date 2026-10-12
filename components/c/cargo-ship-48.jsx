import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw0_76buw.css';
import '../../css/d/d22vebp3d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw0_76buw"/><path class="d22vebp3d"/>`,
		"fallback": "energy-icons:cargo-ship-48",
	});
}

export default Component;
