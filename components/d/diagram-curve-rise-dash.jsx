import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q42vlfw3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q42vlfw3j"/>`,
		"fallback": "streamline-ultimate:diagram-curve-rise-dash",
	});
}

export default Component;
