import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfm2d7bww.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfm2d7bww"/>`,
		"fallback": "glyphs:activity",
	});
}

export default Component;
