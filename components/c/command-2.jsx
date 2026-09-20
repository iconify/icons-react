import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-ml_tw3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-ml_tw3h"/>`,
		"fallback": "streamline-cyber-color:command-2",
	});
}

export default Component;
