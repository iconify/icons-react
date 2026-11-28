import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msphedb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msphedb2j"/>`,
		"fallback": "noviair-light:cube-check",
	});
}

export default Component;
