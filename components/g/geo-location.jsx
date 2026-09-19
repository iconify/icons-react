import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlv7khici.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xlv7khici"/>`,
		"fallback": "healthicons:geo-location",
	});
}

export default Component;
