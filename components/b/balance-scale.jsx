import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcekv60qe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcekv60qe"/>`,
		"fallback": "uil:balance-scale",
	});
}

export default Component;
