import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt9l5qbra.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jt9l5qbra"/>`,
		"fallback": "streamline-plump:horizontal-menu-circle-solid",
	});
}

export default Component;
