import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdh5c-m9v.css';
import '../../css/b/bf8izsb7o.css';
import '../../css/q/qdhnwmbfo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdh5c-m9v"/><path class="bf8izsb7o"/><path class="qdhnwmbfo"/>`,
		"fallback": "energy-icons:energy-island-20-bold",
	});
}

export default Component;
