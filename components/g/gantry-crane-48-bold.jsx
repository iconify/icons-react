import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw81v4b0k.css';
import '../../css/k/kx-x5p24u.css';
import '../../css/t/tah-fgebz.css';
import '../../css/q/qsti3bbut.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw81v4b0k"/><path class="kx-x5p24u"/><path class="tah-fgebz"/><path class="qsti3bbut"/>`,
		"fallback": "energy-icons:gantry-crane-48-bold",
	});
}

export default Component;
