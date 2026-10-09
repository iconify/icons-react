import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7474gbcq.css';
import '../../css/w/w2h_ynbwx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7474gbcq"/><path class="w2h_ynbwx"/>`,
		"fallback": "energy-icons:baby-48",
	});
}

export default Component;
