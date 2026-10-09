import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_721kb1n.css';
import '../../css/k/k1mcwabef.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_721kb1n"/><path class="k1mcwabef"/>`,
		"fallback": "energy-icons:cricket-48-bold",
	});
}

export default Component;
