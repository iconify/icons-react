import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqr-nobad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqr-nobad"/>`,
		"fallback": "noviair-light:align-center",
	});
}

export default Component;
