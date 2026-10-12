import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqqj3db2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqqj3db2n"/>`,
		"fallback": "andrsrxn:ease-out",
	});
}

export default Component;
