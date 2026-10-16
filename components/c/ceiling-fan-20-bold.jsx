import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkluasbjw.css';
import '../../css/m/moudosbgx.css';
import '../../css/o/olb-5xpso.css';
import '../../css/f/f-9u6xbiu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkluasbjw"/><path class="moudosbgx"/><path class="olb-5xpso"/><path class="f-9u6xbiu"/>`,
		"fallback": "energy-icons:ceiling-fan-20-bold",
	});
}

export default Component;
