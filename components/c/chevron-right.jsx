import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvrlecb0t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvrlecb0t"/>`,
		"fallback": "doodle-icons:chevron-right",
	});
}

export default Component;
