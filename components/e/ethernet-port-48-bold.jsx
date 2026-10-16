import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-ykpjboh.css';
import '../../css/w/w-yr_fb2g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-ykpjboh"/><path class="w-yr_fb2g"/>`,
		"fallback": "energy-icons:ethernet-port-48-bold",
	});
}

export default Component;
