import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uujuzybax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uujuzybax"/>`,
		"fallback": "streamline-cyber:focus-3",
	});
}

export default Component;
