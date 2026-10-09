import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_07ucb-p.css';
import '../../css/z/znfn-zmom.css';
import '../../css/f/f1udcubwc.css';
import '../../css/h/h28-9ombi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_07ucb-p"/><path class="znfn-zmom"/><path class="f1udcubwc"/><path class="h28-9ombi"/>`,
		"fallback": "energy-icons:badminton-48-bold",
	});
}

export default Component;
