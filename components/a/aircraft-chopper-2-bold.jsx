import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz-uxmbck.css';
import '../../css/r/r8i2-5bdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz-uxmbck"/><path class="r8i2-5bdw"/>`,
		"fallback": "streamline-ultimate:aircraft-chopper-2-bold",
	});
}

export default Component;
