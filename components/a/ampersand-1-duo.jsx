import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtcrizmco.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtcrizmco"/>`,
		"fallback": "glyphs:ampersand-1-duo",
	});
}

export default Component;
