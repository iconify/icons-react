import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pla65zbzp.css';
import '../../css/t/tmookwb_d.css';
import '../../css/s/sbar25bid.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pla65zbzp"/><path class="tmookwb_d"/><path class="sbar25bid"/>`,
		"fallback": "energy-icons:hotel-48-bold",
	});
}

export default Component;
