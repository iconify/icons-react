import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp8w1geor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp8w1geor"/>`,
		"fallback": "streamline-logos:deliciousing-logo",
	});
}

export default Component;
