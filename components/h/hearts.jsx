import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixbb7_buq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixbb7_buq"/>`,
		"fallback": "doodle-icons:hearts",
	});
}

export default Component;
