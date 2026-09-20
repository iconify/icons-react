import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmqdh1b0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmqdh1b0n"/>`,
		"fallback": "thesvg-color:inkscape",
	});
}

export default Component;
