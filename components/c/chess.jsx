import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8i_g0-3c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8i_g0-3c"/>`,
		"fallback": "icon-park-outline:chess",
	});
}

export default Component;
