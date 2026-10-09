import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laierucpu.css';
import '../../css/y/y_bkliy_w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laierucpu"/><path class="y_bkliy_w"/>`,
		"fallback": "energy-icons:crucible-48-bold",
	});
}

export default Component;
