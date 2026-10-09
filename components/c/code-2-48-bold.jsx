import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvvq2qbjn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvvq2qbjn"/>`,
		"fallback": "energy-icons:code-2-48-bold",
	});
}

export default Component;
