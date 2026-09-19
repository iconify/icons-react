import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi1p6ucli.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi1p6ucli"/>`,
		"fallback": "glyphs:bars-offset-duo",
	});
}

export default Component;
