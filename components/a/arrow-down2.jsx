import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pik0u_bzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pik0u_bzt"/>`,
		"fallback": "reicon:arrow-down2",
	});
}

export default Component;
