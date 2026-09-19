import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew3888kre.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew3888kre"/>`,
		"fallback": "glyphs:cloud",
	});
}

export default Component;
