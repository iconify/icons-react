import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcvu8dgax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcvu8dgax"/>`,
		"fallback": "fontisto:arrow-left-l",
	});
}

export default Component;
