import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn_wa9bom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xn_wa9bom"/>`,
		"fallback": "noviair-light:chevrons-right",
	});
}

export default Component;
