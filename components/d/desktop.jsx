import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcbn25zhb.css';

const viewBox = {"width":27,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcbn25zhb"/>`,
		"fallback": "fontisto:desktop",
	});
}

export default Component;
