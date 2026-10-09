import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dezwopb-j.css';
import '../../css/p/pv8q02b4e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dezwopb-j"/><path class="pv8q02b4e"/>`,
		"fallback": "energy-icons:file-minus-48",
	});
}

export default Component;
