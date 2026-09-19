import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbi8b00up.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mbi8b00up"/>`,
		"fallback": "healthicons:e-outline",
	});
}

export default Component;
