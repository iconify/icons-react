import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3sab5e0l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r3sab5e0l"/>`,
		"fallback": "healthicons:defibrilator",
	});
}

export default Component;
