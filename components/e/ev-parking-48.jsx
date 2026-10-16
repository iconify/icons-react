import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5i9cpbbm.css';
import '../../css/k/k1a5ibk1n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5i9cpbbm"/><path class="k1a5ibk1n"/>`,
		"fallback": "energy-icons:ev-parking-48",
	});
}

export default Component;
