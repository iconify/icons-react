import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m69prfb3g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m69prfb3g"/>`,
		"fallback": "glyphs:car-side-outline",
	});
}

export default Component;
