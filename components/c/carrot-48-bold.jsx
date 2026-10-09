import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqvc5e6rz.css';
import '../../css/f/fdjv-dbll.css';
import '../../css/n/n9rim1bvv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqvc5e6rz"/><path class="fdjv-dbll"/><path class="n9rim1bvv"/>`,
		"fallback": "energy-icons:carrot-48-bold",
	});
}

export default Component;
