import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjsf1xcyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjsf1xcyb"/>`,
		"fallback": "uim:align-justify",
	});
}

export default Component;
