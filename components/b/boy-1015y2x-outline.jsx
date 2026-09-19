import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drv7s9bde.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="drv7s9bde"/>`,
		"fallback": "healthicons:boy-1015y2x-outline",
	});
}

export default Component;
