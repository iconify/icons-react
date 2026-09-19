import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jslnalb3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jslnalb3i"/>`,
		"fallback": "healthicons:group-discussion-meeting-outline",
	});
}

export default Component;
