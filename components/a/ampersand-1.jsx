import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4sgr09lo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4sgr09lo"/>`,
		"fallback": "glyphs:ampersand-1",
	});
}

export default Component;
