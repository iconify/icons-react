import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clz-cx4ji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clz-cx4ji"/>`,
		"fallback": "noviair-light:clipboard-medical-check",
	});
}

export default Component;
