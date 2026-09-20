import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_04xsbam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_04xsbam"/>`,
		"fallback": "streamline-cyber-color:delete-circle-1",
	});
}

export default Component;
