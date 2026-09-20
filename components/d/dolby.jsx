import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj1fhobwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj1fhobwi"/>`,
		"fallback": "thesvg-color:dolby",
	});
}

export default Component;
