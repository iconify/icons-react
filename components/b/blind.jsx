import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q23gdwy5w.css';

const viewBox = {"width":13,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q23gdwy5w"/>`,
		"fallback": "fontisto:blind",
	});
}

export default Component;
