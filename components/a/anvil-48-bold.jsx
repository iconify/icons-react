import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x931whbpy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x931whbpy"/>`,
		"fallback": "energy-icons:anvil-48-bold",
	});
}

export default Component;
