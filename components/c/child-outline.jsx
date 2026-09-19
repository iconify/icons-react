import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g96vl6bmi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g96vl6bmi"/>`,
		"fallback": "glyphs:child-outline",
	});
}

export default Component;
