import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8e-izr_t.css';
import '../../css/f/fxil81qql.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8e-izr_t"/><path class="fxil81qql"/>`,
		"fallback": "energy-icons:battery-pouch-48",
	});
}

export default Component;
