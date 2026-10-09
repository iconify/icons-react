import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj-uuaceq.css';
import '../../css/t/ta7__44wl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj-uuaceq"/><path class="ta7__44wl"/>`,
		"fallback": "energy-icons:connector-type2-48",
	});
}

export default Component;
