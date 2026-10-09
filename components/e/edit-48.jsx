import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3emfubau.css';
import '../../css/a/ai0csy1rf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3emfubau"/><path class="ai0csy1rf"/>`,
		"fallback": "energy-icons:edit-48",
	});
}

export default Component;
