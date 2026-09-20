import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbjyl9bxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xbjyl9bxf"/>`,
		"fallback": "prime:graduation-cap",
	});
}

export default Component;
