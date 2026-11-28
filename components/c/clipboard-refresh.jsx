import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu1dtvb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu1dtvb9v"/>`,
		"fallback": "noviair:clipboard-refresh",
	});
}

export default Component;
