import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pscmmybmb.css';
import '../../css/k/kfr1grbjb.css';
import '../../css/y/y4ucstbhp.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pscmmybmb"/><path class="kfr1grbjb"/><circle class="y4ucstbhp"/>`,
		"fallback": "lineicons:instagram-original",
	});
}

export default Component;
