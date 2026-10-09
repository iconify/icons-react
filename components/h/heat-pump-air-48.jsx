import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebdkh4bgw.css';
import '../../css/s/syxl9mb3z.css';
import '../../css/w/wk2dzgbah.css';
import '../../css/w/w-o1i1lbw.css';
import '../../css/b/b-2b-wc7d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebdkh4bgw"/><path class="syxl9mb3z"/><path class="wk2dzgbah"/><path class="w-o1i1lbw"/><path class="b-2b-wc7d"/>`,
		"fallback": "energy-icons:heat-pump-air-48",
	});
}

export default Component;
