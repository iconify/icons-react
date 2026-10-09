import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sajekru3w.css';
import '../../css/o/olbscvb8w.css';
import '../../css/c/ctg5mublm.css';
import '../../css/q/q4gaqcb3x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sajekru3w"/><path class="olbscvb8w"/><path class="ctg5mublm"/><path class="q4gaqcb3x"/>`,
		"fallback": "energy-icons:battery-symbol-48-bold",
	});
}

export default Component;
