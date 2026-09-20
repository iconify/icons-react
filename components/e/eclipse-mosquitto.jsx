import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkfl6o0qj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkfl6o0qj"/>`,
		"fallback": "thesvg:eclipse-mosquitto",
	});
}

export default Component;
