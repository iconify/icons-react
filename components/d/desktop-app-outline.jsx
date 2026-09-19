import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm52ebcgl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rm52ebcgl"/>`,
		"fallback": "healthicons:desktop-app-outline",
	});
}

export default Component;
