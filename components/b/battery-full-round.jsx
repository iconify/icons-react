import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tly34rbac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tly34rbac"/>`,
		"fallback": "coolicons:battery-full-round",
	});
}

export default Component;
