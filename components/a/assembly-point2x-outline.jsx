import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otf6voeig.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="otf6voeig"/>`,
		"fallback": "healthicons:assembly-point2x-outline",
	});
}

export default Component;
