import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5g7eibdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5g7eibdn"/>`,
		"fallback": "token:bitbox",
	});
}

export default Component;
