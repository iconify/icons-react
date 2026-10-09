import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avjgpmkfp.css';
import '../../css/z/z9ie_hbca.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avjgpmkfp"/><path class="z9ie_hbca"/>`,
		"fallback": "energy-icons:electric-truck-48-bold",
	});
}

export default Component;
