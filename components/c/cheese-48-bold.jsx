import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4kzwwbha.css';
import '../../css/n/n5_c-mepp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4kzwwbha"/><path class="n5_c-mepp"/>`,
		"fallback": "energy-icons:cheese-48-bold",
	});
}

export default Component;
