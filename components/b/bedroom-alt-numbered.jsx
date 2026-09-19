import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gix6z2bdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gix6z2bdm"/>`,
		"fallback": "cbi:bedroom-alt-numbered",
	});
}

export default Component;
