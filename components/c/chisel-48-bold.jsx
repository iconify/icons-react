import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wveopm0na.css';
import '../../css/o/o0pzhhiin.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wveopm0na"/><path class="o0pzhhiin"/>`,
		"fallback": "energy-icons:chisel-48-bold",
	});
}

export default Component;
