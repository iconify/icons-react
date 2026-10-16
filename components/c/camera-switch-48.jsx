import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auuyt2boe.css';
import '../../css/s/sgfxn2blc.css';
import '../../css/p/p0dk-_bmc.css';
import '../../css/o/ok5ynbbts.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auuyt2boe"/><path class="sgfxn2blc"/><path class="p0dk-_bmc"/><path class="ok5ynbbts"/>`,
		"fallback": "energy-icons:camera-switch-48",
	});
}

export default Component;
