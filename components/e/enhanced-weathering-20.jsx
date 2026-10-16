import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxsm3nbbt.css';
import '../../css/u/u0t0ofhbn.css';
import '../../css/e/e_v0ieb8w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxsm3nbbt"/><path class="u0t0ofhbn"/><path class="e_v0ieb8w"/>`,
		"fallback": "energy-icons:enhanced-weathering-20",
	});
}

export default Component;
