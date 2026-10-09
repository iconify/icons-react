import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc52um7uh.css';
import '../../css/s/sg44xgbay.css';
import '../../css/o/ofilwt45e.css';
import '../../css/o/o8irjv8pn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc52um7uh"/><path class="sg44xgbay"/><path class="ofilwt45e"/><path class="o8irjv8pn"/>`,
		"fallback": "energy-icons:gantry-crane-48",
	});
}

export default Component;
