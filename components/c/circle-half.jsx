import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efbw3gbbv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="efbw3gbbv"/>`,
		"fallback": "glyphs-poly:circle-half",
	});
}

export default Component;
