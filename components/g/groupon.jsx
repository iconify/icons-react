import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhp3rwbuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhp3rwbuv"/>`,
		"fallback": "thesvg-color:groupon",
	});
}

export default Component;
