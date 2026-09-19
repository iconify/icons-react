import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycr3-ac1t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ycr3-ac1t"/>`,
		"fallback": "healthicons:ghana-outline",
	});
}

export default Component;
