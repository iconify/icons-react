import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4vc4jmhp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4vc4jmhp"/>`,
		"fallback": "energy-icons:crown-48-bold",
	});
}

export default Component;
