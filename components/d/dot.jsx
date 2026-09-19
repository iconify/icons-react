import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8nk-ib1h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8nk-ib1h"/>`,
		"fallback": "icon-park-outline:dot",
	});
}

export default Component;
