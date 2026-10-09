import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs1xeldxk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs1xeldxk"/>`,
		"fallback": "energy-icons:green-steel-48-bold",
	});
}

export default Component;
