import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op-3aacxu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op-3aacxu"/>`,
		"fallback": "doodle-icons:chevron-up",
	});
}

export default Component;
