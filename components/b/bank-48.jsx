import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8x798baw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8x798baw"/>`,
		"fallback": "energy-icons:bank-48",
	});
}

export default Component;
