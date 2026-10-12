import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/holqxrb6n.css';
import '../../css/b/bvtynyyyi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="holqxrb6n"/><path class="bvtynyyyi"/>`,
		"fallback": "energy-icons:fox-48-bold",
	});
}

export default Component;
