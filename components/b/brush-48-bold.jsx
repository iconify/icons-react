import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cywpx4aix.css';
import '../../css/p/pqk-h9_8w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cywpx4aix"/><path class="pqk-h9_8w"/>`,
		"fallback": "energy-icons:brush-48-bold",
	});
}

export default Component;
