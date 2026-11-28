import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxid1c1jc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxid1c1jc"/>`,
		"fallback": "noviair:contract-check",
	});
}

export default Component;
