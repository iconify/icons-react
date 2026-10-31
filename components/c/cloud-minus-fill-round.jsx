import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft3fdyb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft3fdyb1m"/>`,
		"fallback": "coolicons:cloud-minus-fill-round",
	});
}

export default Component;
