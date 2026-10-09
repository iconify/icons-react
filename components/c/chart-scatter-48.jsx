import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdp5l0b5n.css';
import '../../css/z/zyix_fbli.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdp5l0b5n"/><path class="zyix_fbli"/>`,
		"fallback": "energy-icons:chart-scatter-48",
	});
}

export default Component;
