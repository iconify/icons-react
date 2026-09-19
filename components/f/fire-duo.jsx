import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppkhjhbfl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppkhjhbfl"/>`,
		"fallback": "glyphs:fire-duo",
	});
}

export default Component;
