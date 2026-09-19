import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tna52mbvm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tna52mbvm"/>`,
		"fallback": "glyphs-poly:d",
	});
}

export default Component;
