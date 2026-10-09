import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_6rndbde.css';
import '../../css/t/tem3d3bqw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_6rndbde"/><path class="tem3d3bqw"/>`,
		"fallback": "energy-icons:bearing-48-bold",
	});
}

export default Component;
