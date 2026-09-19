import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkhi9lbht.css';
import '../../css/q/qvchyyb3r.css';
import '../../css/s/svglptr5r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkhi9lbht"/><path class="qvchyyb3r"/><path class="svglptr5r"/>`,
		"fallback": "flat-color-icons:flow-chart",
	});
}

export default Component;
