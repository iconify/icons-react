import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcnkfpkbw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcnkfpkbw"/>`,
		"fallback": "healthicons:bone-outline",
	});
}

export default Component;
