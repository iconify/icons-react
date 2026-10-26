import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlnwz7iwx.css';

const viewBox = {"width":303,"height":303};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlnwz7iwx"/>`,
		"fallback": "thesvg:apollodotio",
	});
}

export default Component;
