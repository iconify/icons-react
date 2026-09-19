import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njm8qsxea.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="njm8qsxea"/>`,
		"fallback": "glyphs:diamond-1-outline",
	});
}

export default Component;
