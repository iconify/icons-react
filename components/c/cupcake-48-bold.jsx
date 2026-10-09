import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc4hu_b3q.css';
import '../../css/k/kigjocbeh.css';
import '../../css/j/jqo23tbqa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc4hu_b3q"/><path class="kigjocbeh"/><path class="jqo23tbqa"/>`,
		"fallback": "energy-icons:cupcake-48-bold",
	});
}

export default Component;
