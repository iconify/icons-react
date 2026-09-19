import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk58z1bbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nk58z1bbm"/>`,
		"fallback": "iconoir:arrow-down-circle-solid",
	});
}

export default Component;
