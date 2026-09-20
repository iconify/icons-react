import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0r-2x1bp.css';
import '../../css/m/m7mjk89gp.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="f0r-2x1bp"/><path class="m7mjk89gp"/>`,
		"fallback": "thesvg-color:esbuild",
	});
}

export default Component;
