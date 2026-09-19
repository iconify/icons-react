import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzo4ogbef.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzo4ogbef"/>`,
		"fallback": "glyphs:c-duo",
	});
}

export default Component;
