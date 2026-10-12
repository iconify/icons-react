import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5ep7_buc.css';
import '../../css/d/doqpdvjtb.css';
import '../../css/s/sllfovlzd.css';
import '../../css/c/czsmkm6wm.css';
import '../../css/k/ki38ndltb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5ep7_buc"/><path class="doqpdvjtb"/><path class="sllfovlzd"/><path class="czsmkm6wm"/><path class="ki38ndltb"/>`,
		"fallback": "energy-icons:desk-globe-48-bold",
	});
}

export default Component;
