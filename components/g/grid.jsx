import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_elmvb7i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_elmvb7i"/>`,
		"fallback": "flat-color-icons:grid",
	});
}

export default Component;
