import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4r4-xbdp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q4r4-xbdp"/>`,
		"fallback": "healthicons:high-temp-outline",
	});
}

export default Component;
