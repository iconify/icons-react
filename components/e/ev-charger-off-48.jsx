import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6awtztgo.css';
import '../../css/i/i_htz80rx.css';
import '../../css/p/p7kyn66pi.css';
import '../../css/y/y-u291bfo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6awtztgo"/><path class="i_htz80rx"/><path class="p7kyn66pi"/><path class="y-u291bfo"/>`,
		"fallback": "energy-icons:ev-charger-off-48",
	});
}

export default Component;
