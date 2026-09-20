import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/b/b067o7r5w.css';
import '../../css/n/n7j7xwbnn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="b067o7r5w"/><path class="n7j7xwbnn"/></g>`,
		"fallback": "streamline-plump:html-five",
	});
}

export default Component;
