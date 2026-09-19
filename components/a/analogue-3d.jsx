import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfr3i41sx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfr3i41sx"/>`,
		"fallback": "cbi:analogue-3d",
	});
}

export default Component;
