import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6s466b-b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6s466b-b"/>`,
		"fallback": "glyphs:filter",
	});
}

export default Component;
