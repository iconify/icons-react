import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epi5pwbdm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="epi5pwbdm"/>`,
		"fallback": "glyphs:caret-square-bold",
	});
}

export default Component;
