import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkb7t_bea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkb7t_bea"/>`,
		"fallback": "cbi:helium-tot",
	});
}

export default Component;
