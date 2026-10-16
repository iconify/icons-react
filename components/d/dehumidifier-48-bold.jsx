import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzhwxisqb.css';
import '../../css/o/ocwcvp2hx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzhwxisqb"/><path class="ocwcvp2hx"/>`,
		"fallback": "energy-icons:dehumidifier-48-bold",
	});
}

export default Component;
