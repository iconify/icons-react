import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asyv5fbca.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asyv5fbca"/>`,
		"fallback": "famicons:arrow-undo-circle",
	});
}

export default Component;
