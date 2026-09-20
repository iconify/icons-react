import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8l76c5tm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t8l76c5tm"/>`,
		"fallback": "streamline-plump:3d-coordinate-axis-solid",
	});
}

export default Component;
