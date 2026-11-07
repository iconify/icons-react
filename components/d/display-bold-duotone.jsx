import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6tzh5bbz.css';
import '../../css/x/xkrbx0bjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a6tzh5bbz"/><path class="xkrbx0bjf"/>`,
		"fallback": "solar:display-bold-duotone",
	});
}

export default Component;
