import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw2yh03_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw2yh03_d"/>`,
		"fallback": "keyline-icons:chart-tree-map",
	});
}

export default Component;
