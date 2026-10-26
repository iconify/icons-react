import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5j7fss2l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5j7fss2l"/>`,
		"fallback": "doodle-icons:filter",
	});
}

export default Component;
