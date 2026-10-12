import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjevk5tdr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjevk5tdr"/>`,
		"fallback": "energy-icons:child-48",
	});
}

export default Component;
